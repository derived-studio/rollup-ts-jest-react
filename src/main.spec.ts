import { greeter } from './main'
import { version } from '../package.json'

describe('Greeter', () => {
  it('says hello', () => {
    expect(greeter.hello()).toBe(`Hello world from version: ${version}`)
  })
})
