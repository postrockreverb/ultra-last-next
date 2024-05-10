import esbuild from 'esbuild';
import { livereloadPlugin } from '@jgoz/esbuild-plugin-livereload';
import { tailwindPlugin } from 'esbuild-plugin-tailwindcss';
import eslint from 'esbuild-plugin-eslint';
import fs from 'fs';
import * as path from 'path';

export const isWatching = process.argv.includes('-w');
export const isProduction = process.argv.includes('-p');

const entries = {};
const entriesRoot = fs.readdirSync('./entries');
for (const entry of entriesRoot) {
  const entryName = entry.replace('.tsx', '');
  const entryPath = fs.statSync('./entries/' + entry);

  if (entryPath.isFile()) {
    if (/\.tsx|\.css$/.test(entry)) {
      entries[entryName] = `./entries/${entry}`;
      continue;
    }
  }

  if (entryPath.isDirectory() && fs.readdirSync(`./entries/${entry}`).includes('index.tsx')) {
    entries[entryName] = `./entries/${entry}/index.tsx`;
    continue;
  }
}

let [ctx] = await Promise.all([
  esbuild
    .context({
      entryPoints: entries,
      outdir: './dist',
      bundle: true,
      write: true,
      target: 'es6',
      platform: 'browser',
      loader: { '.ts': 'ts' },
      minify: isProduction,
      sourcemap: false,
      keepNames: !isProduction,
      format: 'esm',
      splitting: false,
      entryNames: '[name]-[hash]',
      assetNames: 'assets/[name]-[hash]',
      chunkNames: 'chunks/dep-[hash]',
      metafile: true,
      plugins: [
        tailwindPlugin({ cssModulesEnabled: true }),
        isWatching && livereloadPlugin(),
        eslint(),
        {
          name: 'Manifest',
          setup(build) {
            build.onEnd((result) => {
              const manifest = {};
              const entries = result.metafile.outputs;

              for (let [key, value] of Object.entries(entries)) {
                if (!value.entryPoint) {
                  continue;
                }

                let entryPoint = value.entryPoint;
                let filePath = key;

                // handle css files
                if (entryPoint.includes('stylePlugin:')) {
                  entryPoint = entryPoint.replace('stylePlugin:', '');
                  entryPoint = path.relative('./', entryPoint);
                  filePath = value.cssBundle;
                }

                manifest[entryPoint] = filePath;
              }

              const json = JSON.stringify(manifest, null, 2);
              fs.writeFileSync('./dist/manifest.json', json);
            });
          },
        },
        {
          name: 'Watch logger',
          setup(build) {
            build.onEnd((result) => {
              const emoji = result.errors.length ? '🥵' : '✅';
              console.log(`${emoji}  Build ended with ${result.errors.length} errors`);
            });
          },
        },
      ].filter(Boolean),
    })
    .catch(() => process.exit(1)),
]);

if (isWatching) {
  await ctx.watch();
  await ctx.serve({ servedir: './dist', port: 35729 });
  console.log('💜  Watching...');
} else {
  await ctx.rebuild();
  process.exit(0);
}
