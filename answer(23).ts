let var1 = 'Apple'; let var2 = 'Apple'
let num1 = 20; let num2 = 18; let num3 = 16;
let asia = ['Pakistan', 'India', 'Nepal']

console.log('Equality Test:', var1 == var2)
console.log('Inequality Test:', var1 != var2)

console.log('Equality Test Using Lowercase:', var1.toLowerCase() == var2)

console.log('\nIs first number equal to the second one:', num1 == num2)
console.log('Is first number inequal to the second one:', num1 != num2)
console.log('Is first number greater then the second one:', num1 > num2)
console.log('Is first number lesser then the second one:', num1 < num2)
console.log('Is first number greater then or equal to the second one:', num1 >= num2)
console.log('Is first number lesser then or equal to the second one:', num1 <= num2)

console.log('\nAND Test: Is first number greater then second one and second greater then third one:', num1 > num2 && num2 > num3)
console.log('OR Test: Is first number greater then second one and second greater then third one:', num1 > num2 || num2 > num3)

console.log('\nArray Test: Do Pakistan Belongs to Asia:', asia.includes('Pakistan'))
console.log('Array Test: Do Australia Belongs to Asia:', asia.includes('Australia'))
