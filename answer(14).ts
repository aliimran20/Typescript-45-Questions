let guest = ["Mr Zia", "Mr Daniyal", "Mr Hamza"]

console.log(`Hey ${guest[0]}, you are invited to dinner tonight`)
console.log(`Hey ${guest[1]}, you are invited to dinner tonight`)
console.log(`Hey ${guest[2]}, you are invited to dinner tonight`)

console.log(`\nApologies, ${guest[2]}, can't make it tonight`)

guest[2] = ("Mr Obaid") //Replaces the third entry with a new guest

console.log(`\nHey ${guest[0]}, you are invited to dinner tonight`)
console.log(`Hey ${guest[1]}, you are invited to dinner tonight`)
console.log(`Hey ${guest[2]}, you are invited to dinner tonight`)