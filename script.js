// let question = "What is the smallest country in the world?" 
// let answer = prompt(question)
// let correct = "Vatican City"
// if (answer === correct) {
//     console.log("You got it correct!")
// }
// else {
//     console.log("You were wrong!")
// }

// const quiz = { question: "What is the smallest country in the world?" , answer: "Vatican City"}
// const quiz2 = { question: "What is the biggest country in the world?" , answer: "Russia"}
let questions = [{ question: "What is the smallest country in the world?" ,     answer: "Vatican City"}  
,
                { question: "What is the biggest country in the world?" , answer: "Russia"} ,
                { question: "Which country is known as the Land of the Rising Sun?" , answer: "Japan"} , 
                { question: "Which country is home to the Great Barrier Reef?" , answer: "Australia"} ,
                { question: "What country has the largest population in the world?" , answer: "India"} ]

let counter = 0

for ( let q of questions ) {
    // console.log(q.question);
    let answer = prompt(q.question)
    if (answer === q.answer) {
        alert("You got it correct!")
        counter ++
    }
    else {
        alert("You were wrong!")
    }
}
// let filler = counter + "/" + questions.length
document.getElementById("score").innerHTML= counter + "/" + questions.length

// let fruits = [{name: "apple", colour: "red"}, {name: "blueberry", colour:"blue"}]

// for (let fruit of fruits) {
//     let ans = prompt("whats the colour of" + fruit.name)
//     if (ans === fruit.colour) {
//         alert("wow")
//     }
// }