// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, test } from 'vitest'
import { zing } from '../src/index.js'

describe('🧪 zing tests 🧪', () => {
  test('#1 should ', () => {
    assert.strictEqual(zing('Hello'), 'Hello')
  })

  test('#2 should return "Hello world"', () => {
    assert.strictEqual(zing('Hello {0}', 'world'), 'Hello world')
  })

  test('#3 should return ""', () => {
    // @ts-expect-error
    assert.strictEqual(zing(), '')
  })

  test('#4 should return "Hello Igor Dimitrijević {2}"', () => {
    assert.strictEqual(
      zing('Hello {0} {1} {2}', 'Igor', 'Dimitrijević'),
      'Hello Igor Dimitrijević {2}'
    )
  })

  test('#5 should return ""', () => {
    assert.strictEqual(
      // @ts-expect-error
      zing(new Object(), 'Igor', 'Dimitrijević'),
      ''
    )
  })
})
