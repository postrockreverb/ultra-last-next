import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import nodeGlobals from 'rollup-plugin-node-globals';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

import pkg from './package.json' assert { type: 'json' };

const extensions = ['.ts', '.tsx'];

export default {
  input: './app/index.tsx',
  output: {
    file: pkg.module,
    format: 'iife',
    exports: 'named',
    sourcemap: true,
    strict: true,
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    nodeGlobals(),
    typescript({ tsconfig: './tsconfig.json' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' ),
      preventAssignment: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' },
      ],
    }),
  ],
};