# HASH TABLE

Hash table is a data structure that maps keys to values for highly efficient lookup.
For any problem, have hash tables at the top of your mind as a possible technique to solve
the problem.

Hash tables are very performant. The average complexity time in Big O Notation is O(1) and the worst
case is O(n), meaning is linear.

## Javascript Implementation

Objects in Javascript implements hash tables under the hood.
In Hash table, a `hashing function` is needed to map a key to an index.

Eg. **myHash("hello")** => 3 

## How Hash Tables Work

A hash table works by taking in a `key` and running it through a `hash function`.  A hash function basically maps strings of any length to a number of fixed length.

The hash function needs to be consistent in return a fixed number in a sense that if you pass the same key(**hello**) should alwasy return the same number let's say **3**.

Likewise, it should map **different keys** to **different numbers**. This is always not the case. When **two different** words are hashed to the same number, it is called a **COLLISION**.

## How to Handle Collision

One way to solve collision is to store both the key and value pairs at the same index. 

Upon lookup of either the key or value, you will have to iterate through a bucket of items to find the key you're looking for. This could take **extra time** due to the iteration(`the worst case being O(n)`).

## Operations, API and Methods

- **Storage**: we use arrays as our storage. When implementing hash tables in Javascript, you cannot use an Object as storage(It's cheating).

- **Hashing Function**: it takes in an input and returns a number that could be the index in our array(storage).

> Operations

- set(key, val): set the key and map the value to a location. You can also save the key and value at the location if you have a `collision`.

- get(key): a key is passed to the hash function and both the key and value is returned.

- remove(key): remove a value in storage and sets the location to null. This is achieved by passing a key to the hash function which returns a number and a lookup is performed to return the value in storage.