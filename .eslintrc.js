// build over gatsby config
// https://github.com/gatsbyjs/gatsby/blob/master/.eslintrc.js

const TSEslint = require('@typescript-eslint/eslint-plugin')

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['prettier', 'react', 'jest'], // 'filenames'
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  // globals: {
  //   before: true,
  //   after: true,
  //   spyOn: true,
  //   __PATH_PREFIX__: true,
  //   __BASE_PATH__: true,
  //   __ASSET_PREFIX__: true
  // },
  rules: {
    // 'arrow-body-style': ['warn', 'always'], // todo
    'arrow-body-style': 0,
    'no-unused-expressions': 0,
    'consistent-return': ['error'],
    // 'filenames/match-regex': ['error', '^[a-z-\\d\\.]+$', true],
    'no-console': 'off',
    'no-fallthrough': 0,
    'no-inner-declarations': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-undef': 2,
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],

    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      }
    ],
    'prefer-template': 2,
    'react/display-name': 'off',
    'react/jsx-key': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        ...TSEslint.configs.recommended.rules,
        // We should absolutely avoid using ts-ignore, but it's not always possible.
        // particular when a dependencies types are incorrect.
        '@typescript-eslint/ban-ts-comment': 'warn',
        // This rule is great. It helps us not throw on types for areas that are
        // easily inferrable. However we have a desire to have all function inputs
        // and outputs declaratively typed. So this let's us ignore the parameters
        // inferrable lint.
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        // This rule tries to ensure we use camelCase for all variables, properties
        // functions, etc. However, it is not always possible to ensure properties
        // are camelCase. Specifically we have `node.__gatsby_resolve` which breaks
        // this rule. This allows properties to be whatever they need to be.
        '@typescript-eslint/naming-convention': ['error', { properties: 'never' }],
        // This rule tries to prevent using `require()`. However in node code,
        // there are times where this makes sense. And it specifically is causing
        // problems in our tests where we often want this functionality for module
        // mocking. At this point it's easier to have it off and just encourage
        // using top-level imports via code reviews.
        '@typescript-eslint/no-var-requires': 'off',
        // This rule ensures that typescript types do not have semicolons
        // at the end of their lines, since our prettier setup is to have no semicolons
        // e.g.,
        // interface Foo {
        // -  baz: string;
        // +  baz: string
        // }
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none'
            }
          }
        ],
        // This ensures all interfaces are named with an I as a prefix
        // e.g.,
        // interface IFoo {}
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^[^I]',
              match: false
            }
          }
        ],
        '@typescript-eslint/no-empty-function': 'off',
        // This ensures that we always type the return type of functions
        // a high level focus of our TS setup is typing fn inputs and outputs.
        '@typescript-eslint/explicit-function-return-type': 'error',
        // This doesn't force us to use interfaces over types aliases for object definitions.
        // Type is still useful for opaque types e.g., type UUID = string
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        // We are using eslint-no-unused-var configuration
        // 'no-unused-vars': [
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_'
          }
        ],
        // Allows us to write unions like `type Foo = "baz" | "bar"`
        // otherwise eslint will want to switch the strings to backticks,
        // which then crashes the ts compiler
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }]
      }
    },
    {
      files: ['*.tsx', '*.spec.*'],
      rules: {
        'no-undef': 0,
        '@typescript-eslint/consistent-type-definitions': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-function': 0
      }
    },
    {
      files: ['*.spec.*'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-explicit-any': 0
      }
    }
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
