function make_sandwich(...items: string[])
{
    console.log("Sandwich Summary:")
    console.log("Bread")
    if (items.length >= 1) console.log(items[0])
    if (items.length >= 2) console.log(items[1])
    if (items.length >= 3) console.log(items[2])
    console.log("Bread\n")
}

make_sandwich("Cheese", "Ham")
make_sandwich("Turkey", "Lettuce", "Tomato")
make_sandwich("Peanut Butter", "Jelly")