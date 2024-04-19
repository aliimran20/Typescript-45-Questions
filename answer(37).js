function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("City: ".concat(city, " Country: ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Mumbai", "India");
