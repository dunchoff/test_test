// let userName = "Vlad"
// let userAge = 28
// const isSmoking = false

// console.log("Something")
// console.log(userName, userAge, isSmoking)

// alert("Something")
// alert(userName)

// console.log("User name:" + userName)
// console.log(`User name ${userName}`)

// alert("some info")
// let newUserAge = prompt("How old r u?", "26")
// console.log(newUserAge)

// let confirmation = confirm("Ok")
// console.log(confirmation)
// userAge="25"
// console.log(typeof userAge)

// let num = Number(userAge)
// console.log(num, typeof num)

// Math

// let op1=2
// let op2=5

// let op3="2"

// let sum = op1**op2
// console.log(sum)

// sum += 1
// console.log(sum)

// Compare

// console.log(op1 > op2)
// console.log(op1 === Number(op3))

// if-else

// if (op1 > op2) {
//     console.log("op1 > op2")
// }
// else if (op1 < op2 ){
//     console.log("op2 > op1")
// }
// else{
//     console.log("equal")
// }

// let result = 28 > 18 ? ("28>18") :("28<=18")
// console.log(result)

// let streetTemp = 28
// let wannaGo = true

// if (streetTemp > 18 && wannaGo == true) {
//     console.log("go for a walk")
// }
// else {
//     console.log("stay home")
// }

// for (let i = 0; i < 3; i++) {
//     console.log (i)
// }

// function showHi(){
//     console.log("hi")
// }

// function countSum(a, b ){
//     console.log("I'm counting sum")
//     return a+b
// }

// let result = countSum(10,12)
// console.log(result)

// console.log(Math.max(12,12,123,22,4412,12))
// console.log(Math.sqrt(49))
// console.log(Math.min(12,12,123,22,4412,12))

// let carsArray = ["volvo", "bmw", "uaz"]
// let newCars = ["nissan", "ford"]

// console.log(carsArray)

// console.log(carsArray[0])
// console.log(carsArray.length)
// console.log(carsArray[carsArray.length-1])

// carsArray.push("ford")
// console.log(carsArray)

// carsArray.pop()
// console.log(carsArray)

// carsArray.unshift("nissan")
// console.log(carsArray)

// carsArray.shift("nissan")
// console.log(carsArray)

// let cars = carsArray.concat(newCars)
// console.log(cars)

// let str = "String"
// console.log(str.length)


// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].length<4){
//         console.log(cars[i])
//     }  
// }

// const car= {
//     name: "volvo",
//     wheels: "4",
//     showLight(){
//         console.log("light")
//     }
// }

// car.showLight()

const widthInput = document.querySelector(".inputwidth")
const heightInput = document.querySelector(".inputheight")
const colorInput =document.querySelector(".inputcolor")




function createNewElement() {
    let elWidth = widthInput.value

    let newDiv = document.createElement("div")
        newDiv.className="new__div"
        newDiv.style.width = elWidth + "px"
        newDiv.style.height= heightInput.value + "px"
        newDiv.style.backgroundColor = colorInput.value

    document.querySelector(".field").append(newDiv)
}

function removeNewElement(){

    let remDiv = document.querySelector(".new__div")
    
    if (remDiv){
        remDiv.remove()
    }
    else{
        alert("Add div, please")
    }
}

let stepT = 0
let stepL = 0


function top__move(){
    let movDiv= document.querySelector(".new__div")
    stepT-=5
    if (stepT<0){
        alert("Stop")
    }
    else{
        
        movDiv.style.marginTop = stepT +"px"; 
    }

 

}

function bottom__move(){

    let movDiv= document.querySelector(".new__div")
    stepT += 25
    
    console.log(600 - heightInput.value)

    if (stepT >= (600-heightInput.value)){
        return
    }
    else{
        movDiv.style.marginTop = stepT +"px";
        console.log(stepT)
    }

}

function left__move(){

    let movDiv= document.querySelector(".new__div")
    stepL-=5
    if (stepL<0){
        alert("Stop")
    }
    else{
        
        movDiv.style.marginLeft = stepL +"px";
    }

}

function right__move(){
    stepL+=5
    let movDiv= document.querySelector(".new__div")
   
    movDiv.style.marginLeft = stepL +"px";

}
