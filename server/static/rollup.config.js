import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import nodeGlobals from 'rollup-plugin-node-globals';
import alias from '@rollup/plugin-alias';

import pkg from './package.json' assert { type: 'json' };

const extensions = ['.ts', '.tsx'];

export default {
  input: './app/index.tsx',
  output: {
    file: pkg.module,
    format: 'esm',
    exports: 'named',
    sourcemap: true,
    strict: true,
  },
  plugins: [
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' },
      ],
    }),
    resolve({ extensions }),
    commonjs(),
    nodeGlobals(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),
  ],
};
