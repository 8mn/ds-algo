//  LIFO
// list with restrictions
// stack of plates
//  Usage
//  browser history tracking
//  undo operation
// callstack in JS runtime
// operation: Push, pop, peek, isEmpty, size, print



class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(element){
        return this.items.pop(element)
    }

    peek(){
        return this.items[this.items.length - 1]
    }


    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)


console.log(stack.size())
stack.print()


console.log(stack.pop())
