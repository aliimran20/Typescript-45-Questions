function make_great(magicians: string[]): string[] 
{
    let great_magicians: string[] = []
    for (let magician of magicians) 
    {
        great_magicians.push(magician + " the Great")
    }

    return great_magicians
}

let magicians: string[] = ["Mag 1", "Mag 2", "Mag 3"]

let great_magicians: string[] = make_great([...magicians])

console.log("Original Magicians:")
for (let magician of magicians) 
{
    console.log(magician)
}

console.log("\nModified Magicians:")

for (let magician of great_magicians) 
{
    console.log(magician)
}