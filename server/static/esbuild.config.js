import esbuild from 'esbuild';
import manifestPlugin from 'esbuild-plugin-manifest';
import cssModulesPlugin from 'esbuild-css-modules-plugin';
import { livereloadPlugin } from '@jgoz/esbuild-plugin-livereload';
import eslint from 'esbuild-plugin-eslint';
import fs from 'fs';

export const isWatching = process.argv.includes('-w');
export const isProduction = process.argv.includes('-p');

const RE_ENTRY = /^entries\/(?<entry>\w+)\/index.tsx/gm;
const RE_OUT_ENTRY = /^dist\/(?<file>.+)$/gm;

const entries = fs.readdirSync('./entries').reduce((entries, entry) => {
  return { ...entries, [entry]: `./entries/${entry}/index.tsx` };
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
    plugins: [
      cssModulesPlugin({ inject: true }),
      manifestPlugin({
        generate: (entries) => {
          const manifest = {};
          for (let [key, value] of Object.entries(entries)) {
            const entryMatches = RE_ENTRY.exec(key);
            const outMatches = RE_OUT_ENTRY.exec(value);
            manifest[entryMatches.groups.entry + '.js'] = outMatches.groups.file;

            RE_ENTRY.lastIndex = 0;
            RE_OUT_ENTRY.lastIndex = 0;
          }
          return manifest;
        },
      }),
      livereloadPlugin(),
      eslint(),
      {
        name: 'watchLogger',
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
