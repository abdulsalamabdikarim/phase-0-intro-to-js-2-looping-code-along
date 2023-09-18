// Code your solutions in this file
for (let age = 30; age <40; age++){
    console.log(`I am ${age} years old. Happy birthday to me!`);
    
}
const gifts = ["teddy bear","drone","doll"];
function wrapGifts(gifts){
    for(i=0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts);


//const friends = ["Charlie", "Samip", "Ali"];
const thankYouMessage=[];
function writeCards (array, event){
    for (i=0; i < array.length; i++){
        thankYouMessage.push(`Thank you ${array[i]} for the ${event} gift`);
    }
    return thankYouMessage;
}
writeCards(["Charlie", "Samip", "Ali"],"graduation");
//console.log(thankYouMessage);


function countDown(a){
    while (a >= 0){
        console.log(a);
        a--;
    }
}
countDown(10);

const fruits = [];
fruits.push(`apple`);
console.log(fruits[0]);