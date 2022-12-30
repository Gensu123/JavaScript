let fullname = "Waleed Khalil"
let firstName
let lastName

// firstName = fullname.slice(0,6)
// lastName = fullname.slice(6)

firstName = fullname.slice(0, fullname.indexOf(" "))
lastName = fullname.slice(fullname.indexOf(" ") + 1)


console.log(firstName)
console.log(lastName)