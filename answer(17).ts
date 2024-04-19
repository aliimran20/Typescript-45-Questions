let places = [' USA', ' AUSTRALIA', ' PERU', ' CANADA', ' GERMANY']

console.log(`Original Order: ${places}`)

console.log("\nReverse Order:" + [...places].sort()) //...restricts original array from changing

console.log(`\nOriginal Order Remains Same: ${places}`)

console.log("\nReverse Order: " + [...places].sort().reverse())

console.log(`\nOriginal Order Remains Same: ${places}`)

places.reverse()
console.log(`\nReversed Order by Changing Array: ${places}`)

places.reverse()
console.log(`\nReversed Order to Original: ${places}`)

places.sort()
console.log(`\nSorted Array: ${places}`)

places.sort().reverse()
console.log(`\nFinal Sort: ${places}`)