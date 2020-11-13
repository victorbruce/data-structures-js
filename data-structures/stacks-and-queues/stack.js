const Stack = function() {
  this.storage = "";
}

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat("***", val);

  return this.size();
};

Stack.prototype.pop = function() {
  // get the last item in the string
  const str = this.storage.slice(this.storage.lastIndexOf("***") + 3);

  // Update the storage with the exclusion of the last item
  this.storage = this.storage.substring(0, this.storage.lastIndexOf("***"));

  // Return storage size
  this.size();
  // Return the poped item
  return str;
};

Stack.prototype.size = function() {
  const newArr = this.storage.split("***");

  return newArr.length - 1;
};

const myWeeklyGoals = new Stack();
myWeeklyGoals.push("Learn one DS a day");
console.log(myWeeklyGoals.storage);
