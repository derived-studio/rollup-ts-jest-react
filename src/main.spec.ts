import { greeter } from './main'
const { version } = require('../package.json')

describe('Greeter', () => {
  it('says hello', () => {
    expect(greeter.hello()).toBe(`Hello world from version: ${version}`)
  })
})
