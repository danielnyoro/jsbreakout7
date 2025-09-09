
function introducePerson (name, age){
    return `Hi, I'm ${name} and I'm ${age} years old`
}


const intro1=introducePerson ("Alice", 25)
const intro2=introducePerson ("Bob", 30)

console.log (intro1)
console.log (intro2)

//comments//
/**
 * Name and age are Parameters.
 * "Alice, 25" and "Bob, 30" are the arguments
 * Fundamenental Differeneces between the above 2 is that "Parameters are used for Place
 * holders and Arguments are the values"
 * 
 *  */

function createProfile (username, role= "user",isActive = "true"){
    return {
    username:username, 
    role:role,
    isActive:isActive
    }
}

const user1=createProfile("john123")
const user2=createProfile("admin456", "administrator")
const user3=createProfile("guest789", "guest", false)

console.log(user1)
console.log(user2)
console.log(user3)

/**
 * default values useful in real applications bacause they prevent errors.
 * 
 */