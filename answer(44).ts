function car_info(manufacturer: string, model: string, ...extras: [string, string][])
{
    return { manufacturer, model, extras}
}

let car = car_info("Toyota", "Suzuki", ["color", "red"], ["year", "2022"])

console.log(car)