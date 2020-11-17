# Linked List

Linked list is a data structure that represents a sequence of data. Linked list can contain sorted or unsorted elements, duplicate or unique elements.

## Types of Linked List

There are two types of Linked List.

- Singly Linked List: each node points to the next node in the linked list

- Doubly Linked List: gives each node pointers to the next and previous nodes.

## Difference Between Arrays and Linked List

An array and linked list have almost similar characteristics. The difference is that, in an array, **elements are indexed**. 

But in a linked list, elements are not indexed hence when you want to have access to an element within a linked list, you will have to start from the beginning(head). This makes the runtime linear, ie O(n) which makes it slow.

## Advantages of Linked List

1. Insertions and Deletions can be very quick(has a time complexity of O(1)). Adding an item to the beginning(prepending) is very fast.

## Disadvantages of Linked List

2. Adding an item to the end of a linked list(append) is very slow. Has a time complexity of O(n)