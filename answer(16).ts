let guestu = ["Mr Zia", "Mr Daniyal", "Mr Hamza"]

console.log(`Hey ${guestu[0]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[1]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[2]}, you are invited to dinner tonight`)

console.log(`\nApologies, ${guestu[2]}, can't make it tonight`)

guestu[2] = ("Mr Obaid") //Replaces the third entry with a new guest

console.log(`\nHey ${guestu[0]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[1]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[2]}, you are invited to dinner tonight`)

console.log(`\nHey ${guestu[0]}, ${guestu[1]}, & ${guestu[2]}, we just got a bigger table`)

guestu.unshift("Mr Qasim") //Adds Mr.Qasim at the start of the array

let middlepositionx = guestu.length/2 //Determines the middle position by dividing the total guest length by 2
guestu.splice(middlepositionx, 0, "Mr Asharib") //Adds Mr.Asharib at the middle of the array without removing any existing person (0)

guestu.push("Mr Okasha") //Adds Mr Okasha at the end of the array

console.log(`\nHey ${guestu[0]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[1]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[2]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[3]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[4]}, you are invited to dinner tonight`)
console.log(`Hey ${guestu[5]}, you are invited to dinner tonight`)

console.log(`\nApologies, we can invite only two people`)

console.log(`\nSorry ${guestu[5]}, you aren't invited today`)
guestu.pop() //Removes 6th index

console.log(`Sorry ${guestu[4]}, you aren't invited today`)
guestu.pop() //Removes 5th index

console.log(`Sorry ${guestu[3]}, you aren't invited today`)
guestu.pop() //Removes 4th index

console.log(`Sorry ${guestu[2]}, you aren't invited today`)
guestu.pop() //Removes 3rd index

console.log(`\nHey ${guestu[1]} & ${guestu[2]}, you are still invited at the dinner`)

console.log('\n' + guestu[3]) //Displaying that the list beyond 2nd index is empty
console.log(guestu[4])