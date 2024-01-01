
# Linked Lists

Linked lists are fundamental data structures composed of nodes that together represent a sequence. Each node contains data and a reference (or link) to the next node in the sequence. This structure allows for efficient insertion and removal of elements from any position in the sequence during iteration.

## Singly Linked Lists

In a singly linked list, each node contains a reference to the next node (or null to mark the end of the list).

### Operations and Big O

- **Insertion** - O(1) at the beginning, O(n) at the end or middle
- **Deletion** - O(1) at the beginning, O(n) at the end or middle
- **Access** - O(n)
- **Search** - O(n)

### Use Cases

- When you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is critical).
- When you don't need random access to any elements.
- When you want a simple and efficient way to implement a stack or queue.

## Doubly Linked Lists

A doubly linked list is similar to a singly linked list, but every node also has a reference to the previous node. This makes some operations more efficient.

### Operations and Big O

- **Insertion** - O(1) at the beginning and end, O(n) at the middle
- **Deletion** - O(1) at the beginning and end, O(n) at the middle
- **Access** - O(n)
- **Search** - O(n)

### Use Cases

- When you need to be able to delete nodes from both ends of the list with equal efficiency.
- When you want to be able to iterate the list in both directions.
- When you need to quickly locate and delete a node knowing only its address (like in a Least Recently Used (LRU) cache).


## Conclusion

Linked lists are versatile data structures that offer efficient insertion and deletion. They are used in many types of applications to implement various abstract data types like lists, stacks, queues, and associative arrays. When considering using a linked list, think about the complexity of the operations and whether the benefits of linked lists align with the needs of your application.

