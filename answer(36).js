function shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love TypeScript'; }
    console.log("Shirt Size: ".concat(size, ", Message: ").concat(message));
}
shirt();
shirt("Medium");
shirt("Small", "All the Best!");
