"use strict"

let sum = 0 
const shoppingList = [123, 23, 1123]

for(const shoppingItem of shoppingList) {
    sum = sum + shoppingItem
console.log("Summe: " + sum)
}
