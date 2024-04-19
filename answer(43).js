function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    if (items.length >= 1)
        console.log(items[0]);
    if (items.length >= 2)
        console.log(items[1]);
    if (items.length >= 3)
        console.log(items[2]);
    console.log("Bread\n");
}
make_sandwich("Cheese", "Ham");
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
