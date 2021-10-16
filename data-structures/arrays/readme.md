# Arrays

Arrays are one of the simplest but most useful data structures in a programming langauge.
Arrays can either be `static` or `dynamic`. 

Programming languages such as javascript and python for example
have dynamic arrays. This means that the array grows automatically.

Programming languages such as Java for example have static array. This
means that you will have to decalre the capacity or size of the array
during initialization. When the array capacity is exhausted, a new array is created with the
capacity doubled and the content of the old array copied over the newly created array.


Nb: Java has a dynamic array called ArrayList which grows by 50% of the original size of the array.


## Interface

- Properties
  - storage: a place to hold items
  - length: for tracking the length of the array.

- Methods
  - insert(): add an item to an array.
  - remove(): delete an item from an array.
  - indexAt(): get an item from an array at a particular index.
  - indexOf(): returns the index of an item within a given array.
  - removeAt(): delete an item from an array at a particular index.

## Run time

Lookup: O(1)
Insertion: O(n)
deleting: O(n)