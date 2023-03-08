"use strict"

const fs = require("fs")
const data = fs.readFileSync("data.json", {encoding: "utf-8"})

console.log("data:", data)
console.log("typeof data:", typeof data)


