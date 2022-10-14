/**
 * This is the standard index.ts starting point.
 *
 * author  Ethan Prieur
 * version 1.0
 * since   2022-10-12
 */

import Stack from './stack'
import promptSync from 'prompt-sync'

const myNewStack = new Stack()

const prompt = promptSync()
const someNumberString = prompt('enter a number: ')
const someNumberInt = parseInt(someNumberString)
myNewStack.push(someNumberInt)
console.log('stack before pop: ', myNewStack.getStack())
myNewStack.peek()

myNewStack.pop()
console.log('stack after pop: ', myNewStack.getStack())
console.log('\nDone')
