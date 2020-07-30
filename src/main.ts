const { version } = require('../package.json')

export interface IGreeter {
  hello: () => string
}

export const greeter: IGreeter = {
  hello: () => `Hello world from version: ${version}`
}
