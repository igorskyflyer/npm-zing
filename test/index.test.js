const chai = require('chai').assert
const { zing } = require('../src/index.js')

describe('🧪 Zing tests 🧪', () => {
  it('#1 should return "Hello"', () => {
    chai.strictEqual(zing('Hello'), 'Hello')
  })

  it('#2 should return "Hello world"', () => {
    chai.strictEqual(zing('Hello {0}', 'world'), 'Hello world')
  })

  it('#3 should return ""', () => {
    // @ts-ignore
    chai.strictEqual(zing(), '')
  })

  it('#4 should return "Hello Igor Dimitrijević {2}"', () => {
    chai.strictEqual(zing('Hello {0} {1} {2}', 'Igor', 'Dimitrijević'), 'Hello Igor Dimitrijević {2}')
  })
})
