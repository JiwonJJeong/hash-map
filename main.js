import {HashMap} from "./hashmap.js"

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.keys()); // should have array of 12 keys

test.set("hat", "new black");
test.set("kite", "new pink");

console.log(test.values()); // should have array of 12 values (testing overwriting same key)

console.log(test.length()); // 12

test.set("moon", "silver");

console.log(test.keys());; // array of 13 keys

console.log(test.get("frog")); // green
console.log(test.get("kite")); // new pink

test.remove("elephant");
test.remove("apple");
test.remove("banana");
console.log(test.has("elephant")); // false
console.log(test.has("hat")); // true

console.log(test.entries()); // array of 10 key value pairs
