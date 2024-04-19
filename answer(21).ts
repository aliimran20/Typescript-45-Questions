let number = [1, 2, 3, 4, 5]

// Intentionally accessing an out-of-range index
console.log("Accessing an element with an incorrect index:", number[20]); // Error: Index out of range

// To correct the error, let's access an element with a valid index
console.log("Accessing an element with a valid index:", number[2]); // Accessing the element with index 2 (value 3)