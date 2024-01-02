
# Stack Data Structure

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. The last element added to the stack will be the first element removed. It's analogous to a stack of plates; you can only take the top plate off the stack and can only add a new plate at the top.

## Implementation

Stacks can be implemented using arrays or linked lists. Here, we discuss two implementations:

1. **Using Linked List**: Elements are nodes linked to each other, with the 'top' node being the most recently added.
2. **Using Array**: Elements are stored in an array, with the 'end' of the array representing the top of the stack.

## Operations and Big O Notation

### `push(val)` - Adding an element to the top of the stack

- **Linked List Implementation**: O(1)
  - A new node is created and added at the beginning of the list.
- **Array Implementation**: Amortized O(1)
  - Elements are added at the end of the array. Occasionally, this might involve resizing the array, which is an O(n) operation, but this is rare enough that the average time complexity remains constant.

### `pop()` - Removing the top element from the stack

- **Linked List Implementation**: O(1)
  - The node at the beginning of the list is removed.
- **Array Implementation**: O(1)
  - The element at the end of the array is removed.

### `peek()` - Getting the value of the top element without removing it

- **Both Implementations**: O(1)
  - This operation simply returns the value of the top element without modifying the stack.

### `size()` - Getting the number of elements in the stack

- **Both Implementations**: O(1)
  - The size is tracked with a variable that's updated with each push/pop operation.

## Example Scenarios for Using a Stack

1. **Function Call Management**: In most programming languages, the call stack is a stack where each entry represents a function call. The most recent function called (and not yet returned) is on the top.
2. **Undo Mechanism**: Applications with an undo feature can use a stack to keep track of operations. Each new operation is pushed onto the stack, and an undo simply pops the last operation and reverses it.
3. **Syntax Parsing**: Compilers and interpreters often use stacks for parsing and evaluating expressions. For example, in expression evaluation, an algorithm called the Shunting-yard algorithm uses two stacks for the conversion of infix expressions to postfix.
4. **Backtracking Algorithms**: In scenarios where you need to backtrack to the previous step (like in maze-solving algorithms or depth-first search), stacks can be used to remember the path taken.
5. **HTML and XML Validation**: Validating the proper nesting of tags in HTML and XML files can be performed using a stack to track the hierarchy of elements.

## Conclusion

Stacks are a fundamental data structure with a wide range of applications in computer science. They're simple to understand and implement but are behind some of the most complex operations in programming, from memory management to algorithmic problem solving.
