import json from '@rollup/plugin-json'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { builtinModules } from 'module'

import { version, lib, dependencies, peerDependencies, devDependencies } from './package.json'

const isProduction = process.env.NODE_ENV !== 'development'

const distFolder = 'dist'

const setOutput = (overrides = {}) => ({
  sourcemap: true,
  banner: `/*! ${lib} ${version} */`,
  dir: 'dist/',
  ...overrides
})

export default {
  input: 'src/main.ts',
  output: [
    setOutput({ format: 'es', entryFileNames: '[name].[format].js' }),
    setOutput({ format: 'cjs', entryFileNames: '[name].[format].js' }),
    setOutput({ format: 'iife', entryFileNames: '[name].min.js', name: lib })
  ],
  watch: {
    include: ['src/**'],
    exclude: ['node_modules/**']
  },
  plugins: [
    typescript({
      declaration: true,
      declarationDir: path.resolve(__dirname, `${distFolder}/types/`),
      rootDir: 'src/',
      exclude: ['./**/*.spec.*']
    }),
    commonjs(),
    json(),

    isProduction
      ? terser({
          compress: {
            pure_funcs: ['console.log']
          },
          output: {
            comments: (_node, comment) => {
              return comment.line === 1
            }
          }
        })
      : {}
  ],
  external: [
    ...builtinModules,
    ...(!dependencies ? [] : Object.keys(dependencies)),
    ...(!devDependencies ? [] : Object.keys(devDependencies)),
    ...(!peerDependencies ? [] : Object.keys(peerDependencies))
  ]
}
