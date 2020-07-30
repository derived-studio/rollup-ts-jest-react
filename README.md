# Typescript, Rollup & Jest Starter

Starter project for building typescript projects using Rollup and Jest, React and React Test Library.

## Inspiration

This project has been originally inspired, and thus forked from (danielelder/typescript-rollup-jest)[https://github.com/danielelder/typescript-rollup-jest].

## Usage

```
git clone --depth=1 git@github.com:derived-studio/rollup-ts-jest-react.git [yourProjectName]
```

## Original features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/).
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/). - **(removed)**
- [x] Dead code elimination
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] [Jest](https://jestjs.io/en/) for unit testing and code coverage
- [x] [JSDOM](https://github.com/tmpvar/jsdom) for DOM based testing
- [x] Flexible build configuration using environment variables
- [x] Rapid development with automatic javascript building and browser hot reloading
- [x] Easy debugging via VSCode integration

## Fork features

- [x] Uses [typescript-eslint@3.7.1](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.7.1) instead of tslint
- [x] Adds NPM distribution friendly output bundle files
- [x] Distributes with TS definition files
- [x] Improves jest configuration with initial jest setup

- [x] Supports React and React-Dom
- [x] Includes [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [x] Git hooks for pre commit and pre push (with husky)

## Todo

- [ ] Clean up npm scripts **(in progress)**
- [ ] Restore serve files
- [ ] Include react in an example build

## Scripts

- `build` - Builds the minified production bundle along with typescript modules
- `test` - Runs tests with code coverage report
- `lint` - Lints source files
- `clean` - removes `dist` folder
- `serve` - **temporarily disabled** Builds the development bundle, creates a local server and watches for changes

## VS Code Integration

### Tasks

Access the task list using `shift+command+b` (`ctrl+shift+b` in Windows) to run any of the above scripts.

### Debugging

Unit tests can be debugged from within VS Code by placing a break point within your code and then launching the debugger.

- `Jest - All` - Runs all unit tests in debug mode
- `Jest - Current` - Runs the currently visible within VS Code editor

## Coverage reports

The coverage reports are generated with `Jest`, and output to the `/coverage` folder.

To view the html report open: `coverage/lcov-report/index.html`
