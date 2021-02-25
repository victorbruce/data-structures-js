/*
  DATA STRUCTURE: HASH TABLE

  APPROACH:

  To deal with the issue of collision, one way
  to go about this is to store a bucket([]) containing 
  the key and value at an index within an ARRAY

  Example [[key, value]];

  This approach is a little slow because, you will
  have to iterate over the bucket to get the key
  in order to have access to the value.
*/

const hashFunction = (key, max) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % max;
};
class HashTable {
  constructor() {
    this.storage = [];
    this.maxLimit = 4;
  }

  print = () => {
    console.log(this.storage);
  };

  set = (key, value) => {
    const index = hashFunction(key, this.maxLimit);

    // check if the index is empty or undefined
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      // if index has a value,
      // iterate over the bucket and store key-value pair
      for (let i = 0; i < this.storage[index].length; i++) {
        // check if key already exist in the bucket
        if (this.storage[index][i][0] === key) {
          // overide the keys' value
          this.storage[index][i][1] = value;
          inserted = true;
        }
        // otherwise, insert a bucket in that location
        if (inserted === false) {
          this.storage[index].push([key, value]);
        }
      }
    }
  };

  get = (key) => {
    const index = hashFunction(key, this.maxLimit);
    
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };

  delete = (key) => {
    const index = hashFunction(key, this.maxLimit);
    
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      return this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };
}

const myHash = new HashTable();
myHash.set("apple", 2.00);
myHash.print();