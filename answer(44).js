function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    return { manufacturer: manufacturer, model: model, extras: extras };
}
var car = car_info("Toyota", "Suzuki", ["color", "red"], ["year", "2022"]);
console.log(car);
