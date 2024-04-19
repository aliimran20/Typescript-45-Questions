var usernames = ['Maaz', 'Bilal', 'Admin', 'Ali', ' Hassan'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username == 'Admin') {
        console.log("Hey Admin, Welcome! Wanna See Reports?");
    }
    else
        (console.log("Hey ".concat(username, ", welcome back!")));
}
