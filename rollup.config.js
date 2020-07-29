import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'

import pkg, { version, lib } from './package.json'

const isProduction = process.env.NODE_ENV !== 'development'
const distDir = 'dist/'

const toLibFile = lib ? (file) => file.replace('[lib]', lib) : (file) => file

const outputDefaults = { sourcemap: true, banner: `/*! ${version} */` }

export default {
  input: ['src/main.ts'],
  output: [
    { ...outputDefaults, file: toLibFile(pkg.module), format: 'es' },
    { ...outputDefaults, file: toLibFile(pkg.browser), format: 'iife', name: pkg.module },
    { ...outputDefaults, file: toLibFile(pkg.main), format: 'cjs' }
  ],
  watch: {
    include: ['src/**'],
    exclude: ['node_modules/**']
  },
  plugins: [
    commonjs(),
    json(),
    typescript(),
    isProduction
      ? terser({
          compress: {
            pure_funcs: ['console.log']
          },
          output: {
            comments: (node, comment) => {
              return comment.line === 1
            }
          }
        })
      : {}
  ]
}
