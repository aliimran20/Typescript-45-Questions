var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["user6", "user7", "user8", "user2", "USER9"];
for (var i = 0; i < new_users.length; i++) {
    var lowercase_new_user = new_users[i].toLowerCase();
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (current_users[j].toLowerCase() === lowercase_new_user) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("The username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else
        (console.log("The username '".concat(new_users[i], "' is available.")));
}
