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

console.log(test.keys());

test.set("hat", "new black");
test.set("kite", "new pink");

console.log(test.length()); // 14

test.set("moon", "silver");

console.log(test.get("frog")); // green
console.log(test.get("kite")); // new pink

test.remove("elephant");
test.remove("apple");
test.remove("banana");
console.log(test.has("elephant")); // false
console.log(test.has("hat")); // true

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
