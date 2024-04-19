function describe_city(city:string, country:string = 'Pakistan') 
{
    console.log(`City: ${city} Country: ${country}`)
}

describe_city("Karachi")
describe_city("Lahore")
describe_city("Mumbai", "India")