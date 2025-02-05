

// overrides JavaScript's dynamic increasing of array size
if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }