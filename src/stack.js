/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // элементы стека, верхний это последний в массиве
  }

  push(value) {
    this.items.push(value); // положить сверху
  }

  pop() {
    return this.items.pop(); // снять сверху (undefined, если пусто)
  }

  peek() {
    return this.items[this.items.length - 1]; // посмотреть верхний, не снимая
  }
}

module.exports = {
  Stack,
};
