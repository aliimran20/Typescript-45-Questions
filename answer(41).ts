function make_greats(magicians:string[])
{
    magicians[0] = "The Great " + magicians[0]
    magicians[1] = "The Great " + magicians[1]
    magicians[2] = "The Great " + magicians[2]
}

function show_magician(magicians:string[])
{
    console.log(magicians[0])
    console.log(magicians[1])
    console.log(magicians[2])
}

let magicians_names: string[] = ['Wealth', 'Love', 'Joy']

make_greats(magicians_names)
show_magician(magicians_names)