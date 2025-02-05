

class HashMap {
  static LOAD_FACTOR = 0.9;
  capacity =16;

// overrides JavaScript's dynamic increasing of array size
// should be used whenever access bucket through index
 checkIndex(index){
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
}

}

