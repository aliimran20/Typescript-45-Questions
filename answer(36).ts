function shirt(size:string = 'Large', message:string = 'I Love TypeScript') 
{
    console.log(`Shirt Size: ${size}, Message: ${message}`)
}

shirt()

shirt("Medium")

shirt("Small", "All the Best!")