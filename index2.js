// Boolean38
// let firstFirst =  prompt("Введіть 1 координату 1 клітки дошки")
// let firstSecond =  prompt("Введіть 2 координату 1 клітки дошки")
// let secondFirst =  prompt("Введіть 1 координату 2 клітки дошки")
// let secondSecond =  prompt("Введіть 2 координату 2 клітки дошки")

// if ((firstFirst-secondFirst)==(firstSecond-secondSecond) || (firstFirst==secondFirst) || (firstSecond==secondSecond) ){
//     console.log("Може")
// }
// else{
//     console.log("Не може") 
// }

// Boolean39
// let firstFirst =  prompt("Введіть 1 координату 1 клітки дошки")
// let firstSecond =  prompt("Введіть 2 координату 1 клітки дошки")
// let secondFirst =  prompt("Введіть 1 координату 2 клітки дошки")
// let secondSecond =  prompt("Введіть 2 координату 2 клітки дошки")

// if ((firstFirst-secondFirst)==(firstSecond-secondSecond) || (firstFirst==secondFirst) || (firstSecond==secondSecond) ){
//     console.log("Може")
// }
// else{
//     console.log("Не може") 
// }

// Boolean40
// let firstFirst =  prompt("Введіть 1 координату 1 клітки дошки")
// let firstSecond =  prompt("Введіть 2 координату 1 клітки дошки")
// let secondFirst =  prompt("Введіть 1 координату 2 клітки дошки")
// let secondSecond =  prompt("Введіть 2 координату 2 клітки дошки")

// if (Math.abs((firstFirst-secondFirst) == 1) & Math.abs((firstSecond-secondSecond) == 1) ) {
//     console.log("Може")

// }
// else{
//     console.log("Не може") 
// }

// if18
// let a = prompt("Введіть 1 число")
// let b = prompt("Введіть 2 число")
// let c = prompt("Введіть 3 число")

// if (a==b){
//     alert("третє")
// }
// else if ( b==c){
//     alert("перше")
// }
// else{
//     alert("друге")
// }

// if19
// let a = prompt("Введіть 1 число")
// let b = prompt("Введіть 2 число")
// let c = prompt("Введіть 3 число")
// let d = prompt("Введіть 3 число")

// if ((a==b) & (b==d)){
//     alert("третє")
// }
// else if (( b==c) &(c==d)){
//     alert("перше")
// }
// else if (( a==c) &(c==d)){
//     alert("друге")
// }
// else{
//     alert("четверте")
// }

// if20
// let a = prompt("Введіть координату А")
// let b = prompt("Введіть координату B")
// let c = prompt("Введіть координату C")

// if (Math.abs(a-b)< Math.abs(a-c)){
//     alert("Ближче точка B." + " " + "Вони знаходяться на відстані" + " "+ Math.abs(a-b))
// }
// else{
//     alert("Ближче точка C." + " " + "Вони знаходяться на відстані" + " "+ Math.abs(a-c))
// }

// if21
// let x = prompt("Введіть координату x")
// let y = prompt("Введіть координату y")

// if ((x==0) & (y==0)){
//     alert("0")
// }
// else if ((x==0) & (y!==0)){
//     alert("1")
// }
// else if ((x!==0) & (y==0)){
//     alert("2")
// }
// else{
//     alert("3")
// }


// if22
// let x = prompt("Введіть координату x")
// let y = prompt("Введіть координату y")

// if ((x>0) & (y>0)){
//     alert("I чверть")
// }
// else if ((x<0) & (y>0)){
//     alert("II чверть")
// }
// else if ((x<0) & (y<0)){
//     alert("III чверть")
// }
// else{
//     alert("IV чверть")
// }


// if23
// let x1= prompt("Введіть координату x першої сторони прямокутника ")
// let y1= prompt("Введіть координату y першої сторони прямокутника ")
// let x2= prompt("Введіть координату x другої сторони прямокутника ")
// let y2= prompt("Введіть координату y другої сторони прямокутника ")
// let x3= prompt("Введіть координату x третьої сторони прямокутника ")
// let y3= prompt("Введіть координату y третьої сторони прямокутника ")
// let x4=0
// let y4=0
// if (x1==x2){
//     x4=x3
// }
// else if (x1==x3){
//     x4=x2
// }
// else if (x1==x3){
//     x4=x2
// }

// if (y1==y2){
//     y4=y3
// }
// else if (y1==y3){
//     y4=y2
// }
// else if (y1==y3){
//     y4=y2
// }
// alert("Координати 4 точки"+" "+ x4 +" "+y4)

// if24
// let x= prompt("Введіть x")
// if (x>0){
//     console.log("", 2*Math.sin(x))
// }
// else{
//     console.log(6-x)
// }

// if25
// let x= prompt("Введіть x")
// if ((x>2) || (x<-2)){
//     console.log(2*x)
// }
// else{
//     console.log(-3*x)
// }
// if26
// let x= prompt("Введіть x")
// if (x<=0){
//     console.log(-x)
// }
// else if(((x>0) & (x<2))){
//     console.log(x**2)
// }
// else{
//     console.log(4)
// }

// if27
// let x= prompt("Введіть x")
// if (x<=0){
//     console.log(0)
// }
// else if(Math.trunc(x) % 2 ==0){
//     console.log(1)
// }
// else{
//     console.log(-1)
// }

// if28
// let x= prompt("Введіть рік")
// if ((x % 100) == 0){
//     if ((x % 400)==0){
//         console.log("366")  
//     }
//     else{
//         console.log ("365")
//     }

// }
// else if (x % 4 == 0){
//     console.log ("366");

// }
//     else{
//     console.log ("365")
// }

// if29
// let x= prompt("Введіть число")

// if (x==0){
//     console.log("Гуль")
// }
// else if (x>0) {
//     console.log("Додатнє")
// }
//     else{
//         console.log("Відємне")
//     }
// if (x % 2 ==0){
//     console.log("парне")
// }
// else{
//     console.log("непарне")
// }
// console.log("число")
// if30
// let x= prompt("Введіть число")

// if (x==0){
//     console.log("Ноль")
// }
// else if (x % 2 ==0 ) {
//     console.log("Парне")
// }
//     else{
//         console.log("Непарне")
//     }
// if (x>99){
//     console.log("трьохзначне")
// }
// else if ((x<=99)&(x>9)){
//     console.log("двозначне")
// }
// else{
//         console.log("однозначне")
// }
// console.log("число")