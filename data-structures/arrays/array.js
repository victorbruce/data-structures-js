class MyArray {
  constructor(size) {
    this.size = size;
    this.storage = [];
    this.length = 0;
  }

  insert = (val) => {
    if (this.length >= this.size) {
      this.size = this.size * 2;
    }

    this.storage[this.length++] = val;
    return;
  };

  remove = () => {
    this.storage[this.length - 1] = null;
    this.length--;
    return;
  };

  removeAt = (index) => {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid argument");
    }

    for (let i = index; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];
      this.length--;
    }
  };

  indexOf = (val) => {
    for (let i = 0; i < this.length; i++) {
      if (this.storage[i] === val) {
        return i;
      }
    }
    return -1;
  }

  print = () => {
    for (let i = 0; i < this.length; i++) {
      console.log(this.storage[i]);
    }
    console.log("length:", this.length);
  };
}

const arr = new MyArray(3);
arr.insert(5);
arr.insert(4);
arr.insert(67);
arr.insert(21);
arr.print();
console.log(arr.indexOf(67));