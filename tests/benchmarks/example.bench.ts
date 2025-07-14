import { bench } from 'vitest'
import { add, capitalize } from '../../src'

bench('add two small numbers', () => {
  add(1, 2)
})

bench('add two large numbers', () => {
  add(1000000000, 2000000000)
})

bench('capitalize a short string', () => {
  capitalize('hello world')
})

bench('capitalize a long string', () => {
  capitalize('this is a very long string that needs to be capitalized for benchmarking purposes')
})
