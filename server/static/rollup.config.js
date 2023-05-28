import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import nodeGlobals from 'rollup-plugin-node-globals';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import external from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';

const extensions = ['.ts', '.tsx'];

const entries = fs.readdirSync('./entries').map((entry) => {
  return `./entries/${entry}/${entry}.tsx`;
});

export default {
  input: entries,
  output: {
    format: 'es',
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
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      exclude: './node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions,
    }),
    !isDev && terser(),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' },
      ],
    }),
  ],
  external: ['preact-render-to-string'],
};
