// custom array

class CustomArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  get(index) {
    if (!this.length) {
      console.log("array is empty");
      return;
    }
    return this.data[index];
  }
  push(data) {
    this.data[this.length] = data;
    this.length++;
  }
  pop() {
    if (!this.length) {
      console.log("the array is empty");
      return;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(pos) {
    if (this.length < pos) return;
    const deletedData = this.data[pos];
    // delete this.data[pos];
    // this.length--;
    // return deletedData;
    for (let i = pos; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
    this.length--;
    return deletedData;
  }
  insert(pos, data) {
    if (pos > this.length || pos < 0) {
      console.warn("invalid position");
      return;
    }
    for (let i = this.length - 1; i >= pos; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[pos] = data;
    this.length++;
  }
}
const array = new CustomArray();
array.push("hello");
array.push("khubaib");
array.push("!");
// array.pop();
// const ans = array.get(1);
// const ans = array.delete(0);
// console.log(ans);
array.push(1);
array.insert(0, "kaisa re");

console.log(array);
