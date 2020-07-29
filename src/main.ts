import { version } from '../package.json'

export interface IHello {
  hello: () => string
}

export const greeter: IHello = {
  hello: () => `Hello world from version: ${version}`
}
