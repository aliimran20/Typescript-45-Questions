var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = [' USA', ' AUSTRALIA', ' PERU', ' CANADA', ' GERMANY'];
console.log("Original Order: ".concat(places));
console.log("\nReverse Order:" + __spreadArray([], places, true).sort()); //...restricts original array from changing
console.log("\nOriginal Order Remains Same: ".concat(places));
console.log("\nReverse Order: " + __spreadArray([], places, true).sort().reverse());
console.log("\nOriginal Order Remains Same: ".concat(places));
places.reverse();
console.log("\nReversed Order by Changing Array: ".concat(places));
places.reverse();
console.log("\nReversed Order to Original: ".concat(places));
places.sort();
console.log("\nSorted Array: ".concat(places));
places.sort().reverse();
console.log("\nFinal Sort: ".concat(places));
