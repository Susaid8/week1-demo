let backpack = []

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollar')

//backpack.shift() -shift and splice both-
//show how to remove something from the backpack

backpack.splice(0,1)

let stone = 'water stone'
backpack.push(stone)

backpack.pop()

//console.log(backpack.length) to check how many items are in backpack

backpack.push('great ball', 'antidote', 'revive')

let satchel = backpack.splice(3,2)

//for (let i = 0; i < backpack.length; i++){
 //   console.log(`This is the item at the index of ${i}:`, backpack[i])
 //above console.log shows This is the item at the index of 0: potion
//This is the item at the index of 1: pokedollar
//This is the item at the index of 2: great ball
//} console.log(backpack[i]) shows potion, pokedollar, great ball

//for (let i = 0; i < 2; i++ ){
//  console.log(backpack[i])
//}

// if (backpack.length >= 2){
// for (let i = 0; i < 2; i++){
//     console.log(backpack[i])
// }
// }else{
//     for (let i = 0; i < backpack.length; i++){
//         console.log(`This is the item at the index of ${i}:`, backpack[i])
//     }

// }
//console.log(backpack)
//console.log(satchel)



//----------------------------------------------

let guessMe = 54

while (guessMe < 100) {
    console.log(`---------`, guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log(`divisible by 4 or 5, added 25`, guessMe)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log(`divisible by 3, subtracted 27`, guessMe)
    } else {
        guessMe += 3
        console.log(`added 3`, guessMe)
    }
    guessMe += 22
    console.log(`added 22`, guessMe)
}

console.log(`final value`, guessMe)

