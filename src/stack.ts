/**
 * This class creates a stack
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-12
 */

class Stack {
  readonly stackArray: number[] = []

  // getters
  public getStack(): number[] {
    return this.stackArray
  }

  // methods
  public push(pushedNumber: number): void {
    // add a number to the array
    if (isNaN(+pushedNumber)) {
      console.log('Not a Number')
    } else {
      this.stackArray.push(pushedNumber)
    }
  }

  public pop(): void {
    // pops a number from the stack
    if (this.stackArray.length === 0) {
      console.log('Nothing to pop')
    } else {
      this.stackArray.pop()
    }
  }

  public peek(): void {
    // peeks a number from the stack
    if (this.stackArray.length === 0) {
      console.log('Nothing to Peek')
    } else {
      console.log(`The Peek is: ${this.stackArray[0]}`)
    }
  }
}

export = Stack
