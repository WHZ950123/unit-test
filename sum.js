#!/usr/bin/node

const add = require('./add')

if (process.argv.length !== 4) {
	console.error('./sum.js x y')
	process.exit(0)
}

let x = process.argv[2], y = process.argv[3]
console.log(`${x}+${y}=${add(x, y)}`)