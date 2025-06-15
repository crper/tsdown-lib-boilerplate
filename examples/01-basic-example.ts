// pnpm tsx examples/01-basic-example.ts
import { add, capitalize, greet } from '../src'

function runExample() {
  const greeting = greet('TypeScript User')
  console.log(`Greet: ${greeting}`)

  const sum = add(5, 3)
  console.log(`Add: 5 + 3 = ${sum}`)

  const capitalizedText = capitalize('hello world')
  console.log(`Capitalize: 'hello world' -> ${capitalizedText}`)
}

runExample()
