var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var processors = ['Core i5', ' Core i7', ' Core i9'];
var graphicscard = ['RTX', ' 1060', ' 1060 Super'];
var powersupply = ['400W', ' 500W', ' 600W'];
var memory = ['4GB', ' 8GB', ' 16GB'];
var harddisk = ['256GB', ' 512GB', ' 1TB'];

//Combines all arrays into one single one
var pcitems = ['CPU: ' + __spreadArray([], processors, true), 'GPU: ' + __spreadArray([], graphicscard, true), 'PSU: ' + __spreadArray([], powersupply, true), 'RAM: ' + __spreadArray([], memory, true), 'HDD: ' + __spreadArray([], harddisk, true)];
console.log(pcitems);
