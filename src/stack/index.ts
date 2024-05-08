class Stack<T>{
    items: T[] = [];
    push(element:T){
        this.items.push(element)
    }
    pop(){
        this.items.pop();
    } 
}

// Stack with number type
const stack  = new Stack<number>();
stack.push(1)
stack.push(2)
console.log(stack.items);


// Stack with unknown type
const stackUnknown  = new Stack();
stack.push(1)
stackUnknown.push("string")
stackUnknown.push(false)
console.log(stackUnknown.items);
