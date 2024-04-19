var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}
var magicians = ["Mag 1", "Mag 2", "Mag 3"];
var great_magicians = make_great(__spreadArray([], magicians, true));
console.log("Original Magicians:");
for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
    var magician = magicians_1[_i];
    console.log(magician);
}
console.log("\nModified Magicians:");
for (var _a = 0, great_magicians_1 = great_magicians; _a < great_magicians_1.length; _a++) {
    var magician = great_magicians_1[_a];
    console.log(magician);
}
