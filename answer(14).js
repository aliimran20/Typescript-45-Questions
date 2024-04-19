var guest = ["Mr Zia", "Mr Daniyal", "Mr Hamza"];
console.log("Hey ".concat(guest[0], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guest[1], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guest[2], ", you are invited to dinner tonight"));
console.log("\nApologies, ".concat(guest[2], ", can't make it tonight"));
guest[2] = ("Mr Obaid"); //Replaces the third entry with a new guest
console.log("\nHey ".concat(guest[0], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guest[1], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guest[2], ", you are invited to dinner tonight"));
