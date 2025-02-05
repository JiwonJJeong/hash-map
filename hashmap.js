import {LinkedList} from "linked-lists"

class HashMap {
  static LOAD_FACTOR = 0.9;
  capacity =16;
  buckets = new Array(capacity);

// overrides JavaScript's dynamic increasing of array size
// should be used whenever access bucket through index
 checkIndex(index){
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
}

// only takes strings as keys
// takes modulo to prevent integer overflow AND limits hashCode to bucket length
  hash(key){
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i))%capacity;
    }
 
    return hashCode;
  }

}

