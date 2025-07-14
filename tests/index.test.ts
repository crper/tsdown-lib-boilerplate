// mini-scaffold/tests/index.test.ts
import { expect, test } from 'vitest'
import { add, capitalize, greet } from '../src' // Adjust the import path if necessary

test('greet function returns the correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!')
})

test('greet function handles empty name', () => {
  expect(greet('')).toBe('Hello, !')
})

test('add function returns the correct sum', () => {
  expect(add(2, 3)).toBe(5)
  expect(add(-1, 1)).toBe(0)
  expect(add(0, 0)).toBe(0)
})

test('capitalize function correctly capitalizes a string', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('world')).toBe('World')
  expect(capitalize('typescript')).toBe('Typescript')
})

test('capitalize function handles empty string', () => {
  expect(capitalize('')).toBe('')
})
