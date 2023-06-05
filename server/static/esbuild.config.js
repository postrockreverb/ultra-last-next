import esbuild from 'esbuild';
import { livereloadPlugin } from '@jgoz/esbuild-plugin-livereload';
import eslint from 'esbuild-plugin-eslint';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
import fs from 'fs';

export const isWatching = process.argv.includes('-w');
export const isProduction = process.argv.includes('-p');

const entries = fs.readdirSync('./entries').reduce((entries, entry) => {
  let path;

  const pathStat = fs.statSync('./entries/' + entry);

  if (pathStat.isFile() && /\.tsx$/.test(entry)) {
    path = `./entries/${entry}`;
  }

  if (pathStat.isDirectory() && fs.readdirSync(`./entries/${entry}`).includes('index.tsx')) {
    path = `./entries/${entry}/index.tsx`;
  }

  if (path) {
    const entryName = entry.replace('.tsx', '');
    return { ...entries, [entryName]: path };
  }
}, {});

let ctx = await esbuild
  .context({
    entryPoints: entries,
    outdir: './dist',
    bundle: true,
    write: true,
    target: 'es6',
    platform: 'browser',
    loader: { '.ts': 'ts' },
    minify: isProduction,
    sourcemap: !isProduction,
    keepNames: !isProduction,
    format: 'esm',
    splitting: false,
    entryNames: '[name]-[hash]',
    assetNames: 'assets/[name]-[hash]',
    chunkNames: 'chunks/dep-[hash]',
    metafile: true,
    plugins: [
      cssModulesPlugin({ inject: true }),
      livereloadPlugin(),
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

              manifest[value.entryPoint] = key;
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
    ],
  })
  .catch(() => process.exit(1));

console.clear();
if (isWatching) {
  await ctx.watch();
  await ctx.serve({ servedir: './dist', port: 35729 });
  console.log('💜  Watching...');
} else {
  await ctx.rebuild();
  process.exit(0);
}
