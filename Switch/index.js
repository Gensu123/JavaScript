let grade = 50

switch(true){
    case grade >=90:
        console.log("You did amazing")
        break
    case grade >=80 :
        console.log("You did good")
        break
    case grade >=70:
        console.log("You did ehhh")
        break
    case grade >=60:
        console.log("You barely passed")
        break
    case grade <= 50:
        console.log("You should dropout")
        break

    default:
        console.log("Invalid grade")
}