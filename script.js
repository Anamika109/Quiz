// let sports = [ "basketball", "badminton", "baseball", "beach volley ball", "bicycling"];
// // for ( let i = 0; i < sports.length; i ++) {
// //     console.log(sports[i])
// // }
// for (let sport of sports) {
//     console.log(sport)
// }

const student = { name:"Anamika", age:10, class:"coding"}
console.log(student.name)

const iceCream = { flavour:"Icing On The Cake", toppings:"Whipped cream and sprinkles", Holder:"Waflle cone", holderColour:"Aqua blue"}
console.log("The toppings of this AMAZING ice-cream are " + iceCream.toppings)
console.log("I got this ice-cream in a " + iceCream.Holder)
console.log("The colour of the ice-cream " + iceCream.Holder + " is " + iceCream.holderColour)
console.log("The flavour of this AMAZING ice-cream is " + iceCream.flavour)
if (student.age > 16) {
    console.log("You've been able to drive so go get a job")
}
else if (student.age === 16) {
    console.log("YOU CAN DRIVE NOW!")
}
else {
    console.log("Go live your childhood")
}