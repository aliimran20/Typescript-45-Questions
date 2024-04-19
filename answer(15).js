var guestn = ["Mr Zia", "Mr Daniyal", "Mr Hamza"];

console.log("Hey ".concat(guestn[0], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[1], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[2], ", you are invited to dinner tonight"));
console.log("\nApologies, ".concat(guestn[2], ", can't make it tonight"));

guestn[2] = ("Mr Obaid"); //Replaces the third entry with a new guest

console.log("\nHey ".concat(guestn[0], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[1], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[2], ", you are invited to dinner tonight"));

console.log("\nHey ".concat(guestn[0], ", ").concat(guestn[1], ", & ").concat(guestn[2], ", we just got a bigger table"));

guestn.unshift("Mr Qasim"); //Adds Mr.Qasim at the start of the array

var middleposition = guestn.length / 2; //Determines the middle position by dividing the total guest length by 2

guestn.splice(middleposition, 0, "Mr Asharib"); //Adds Mr.Asharib at the middle of the array without removing any existing person (0)
guestn.push("Mr Okasha"); //Adds Mr Okasha at the end of the array

console.log("\nHey ".concat(guestn[0], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[1], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[2], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[3], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[4], ", you are invited to dinner tonight"));
console.log("Hey ".concat(guestn[5], ", you are invited to dinner tonight"));