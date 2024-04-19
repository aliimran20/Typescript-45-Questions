function make_greats(magicians) {
    magicians[0] = "The Great " + magicians[0];
    magicians[1] = "The Great " + magicians[1];
    magicians[2] = "The Great " + magicians[2];
}
function show_magician(magicians) {
    console.log(magicians[0]);
    console.log(magicians[1]);
    console.log(magicians[2]);
}
var magicians_names = ['Wealth', 'Love', 'Joy'];
make_greats(magicians_names);
show_magician(magicians_names);
