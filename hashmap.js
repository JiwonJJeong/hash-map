import {LinkedList} from "linked-lists"

class HashMap {
  static LOAD_FACTOR = 0.9;
  #capacity =16;
  #loadLimit = this.LOAD_FACTOR * this.#capacity;
  #entriesCount = 0;
  #buckets = new Array(this.#capacity);

// overrides JavaScript's dynamic increasing of array size
// should be used whenever access bucket through index
 checkIndex(index){
  if (index < 0 || index >= this.#buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
}

// only takes strings as keys
// takes modulo to prevent integer overflow AND limits hashCode to bucket length
  hash(key){
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i))%(this.#capacity);
    }
    return hashCode;
  }

  set(key, value){
    const bucket = this.#getBucketFromKey(key);
    if (bucket == null){
      bucket = new LinkedList();
      bucket.append({key, value});  // the value of the linked list node is the key-value pair
      this.#entriesCount++;
    } else {
      const listNode = bucket.find(key, "key");
      if (listNode == null){
        bucket.append({key, value});
        this.#entriesCount++;
      } else{
        listNode.value.value = value;
      }
    }
    // doubles #capacity if entries > #capacity * loadfactor
    if (this.#entriesCount > this.#loadLimit){
      // double #capacity
    }
  }

  get(key){
    const bucket = this.#getBucketFromKey(key);
    if (bucket == null){
      return null;
    } else{
      return bucket.findNode(key, "key").value;
    }
  }

  has(key){
    const bucket = this.#getBucketFromKey(key);
    if (bucket == null){
      return false;
    } else{
      return bucket.contains(key, "key");
    }
  }

  remove(key){
    const bucket = this.#getBucketFromKey(key);
    const nodeIndex = bucket.find(key, "key");
    if (nodeIndex != null){
      bucket.removeAt(nodeIndex);
      this.#entriesCount--;
      return true;
    } else{
      return false;
    }
  }

  length(){
    return this.#entriesCount;
  }

  clear(){

  }

  #getBucketFromKey(key){
    const hash = hash(key);
    this.checkIndex(hash);
    return bucket = this.#buckets[hash];
  }

}

export {HashMap};

