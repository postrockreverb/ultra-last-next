import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import nodeGlobals from 'rollup-plugin-node-globals';
import replace from '@rollup/plugin-replace';
import external from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import pluginManifest from 'rollup-plugin-output-manifest';
import fs from 'fs';

const { default: outputManifest } = pluginManifest;

const isDev = process.env.NODE_ENV === 'development';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

const entries = fs.readdirSync('./entries').reduce((entries, entry) => {
  return {
    ...entries,
    [entry]: `./entries/${entry}/index.tsx`,
  };
}, {});

export default {
  input: entries,
  output: {
    format: 'esm',
    entryFileNames: '[name]-[hash].js',
    assetFileNames: '[name]-[hash].[extname]',
    dir: './dist',
    exports: 'named',
    sourcemap: isDev,
    strict: true,
  },
  plugins: [
    cleaner({ targets: ['./dist'] }),
    external(),
    resolve({
      extensions,
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    nodeGlobals(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      preventAssignment: true,
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: isDev,
      extract: false,
      modules: true,
      minimize: !isDev,
    }),
    !isDev &&
      babel({
        babelHelpers: 'bundled',
        exclude: './node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        extensions,
      }),
    !isDev && terser(),
    typescript({ tsconfig: './tsconfig.json' }),
    outputManifest({ filter: (chunk) => chunk.name && chunk.name in entries }),
  ],
};
