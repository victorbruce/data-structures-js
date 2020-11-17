/* Hash Table */

let hashFunction = (key, max) => {
  //key: string and max: size of our buckets

  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % max;
};

class HashTable {
  constructor() {
    // storage array to store all our data
    this.storage = [];
    // the number of buckets in the array
    this.storageLimit = 4;
  }

  // utility function to print out the storage array.
  print = () => {
    console.log(this.storage);
  };

  // add data to the storage array
  set = (key, value) => {
    // figure out the index of the array by passing it through a hash function
    let index = hashFunction(key, this.storageLimit);

    // check the storage if there is nothing in the index returned by the hash function
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      // if the index location of the storage is not undefined, meaning there is a value,
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (storage[index][i][0] == key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };

  get = (key) => {
    let index = hashFunction(key, this.storageLimit);

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

  remove = (key) => {
    let index = hashFunction(key, this.storageLimit);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index]; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };
}

console.log(hashFunction("victor", 10));

const ht = new HashTable();
ht.set("victor", "person");
ht.set("accra", "capital");
ht.set("profession", "programmer");

console.log(ht.get("victor"));
ht.print();