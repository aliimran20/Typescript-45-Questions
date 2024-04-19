let current_users = ["user1", "user2", "user3", "user4", "user5"]

let new_users = ["user6", "user7", "user8", "user2", "USER9"]

for (let i = 0; i < new_users.length; i++) 
{
    let lowercase_new_user = new_users[i].toLowerCase()

    let usernameExists = false

    for (let j = 0; j < current_users.length; j++) 
    {
        if (current_users[j].toLowerCase() === lowercase_new_user) 
        {
            usernameExists = true
            break
        }
    }

    if (usernameExists) 
    {
        console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`)
    } else (console.log(`The username '${new_users[i]}' is available.`))
    
}