"use strict";

alert("Welcome to 'Wow, Who The Heck Is This Guy Anyways?' Where nothing is made up and the points don't matter.")
let userName = prompt("Hey, you. Yeah, you! What's your name?");
// console.log("user's name is " + userName);
alert('Hey, ' + userName + '! Welcome to the show!')

function normalizeAnswer (answer) {
    // Gets the first character of an answer, which should be either 'y' or 'n', and then capitalizes it to prepare it for our conditional checks.
    let normalizedResponse = answer.charAt(0).toUpperCase();
    return normalizedResponse;
}

let answerPet = prompt('Do I have a pet?');
//console.log(userName + " said " + answerPet + " to the question 'Do I have a pet?'");
alert(userName + ' answered ' + answerPet + '...');54
answerPet = normalizeAnswer(answerPet);


if (answerPet === 'Y') {
    alert("Correct! Her name is Stardust and she's a spoiled little brat. +500 points");
} else if (answerPet === 'N') {
    alert('Wrong. Straight to jail. Do not pass go or collect $500.');
} else alert ("It was a 'yes' or 'no' question...");



let answerFood = prompt('Do I like spicy foods?');
//console.log(userName + " said " + answerFood + " to the question 'Do I like spicy foods?'");
alert(userName + ' answered ' + answerFood + '...');
answerFood = normalizeAnswer(answerFood);


if (answerFood === 'Y') {
    alert("Correct! Wow, it's like we're best friends. +0 points because being best friends should be enough.");
} else if (answerFood === 'N') {
    alert ('Incorrect! Draw 4 cards and skip your turn.');
} else alert ("Really? Again? Dude. Pick 'yes' or 'no'.");


let answerWork = prompt('Have I worked in the games industry?');
//console.log(userName + " said " + answerWork + " to the question 'Have I worked in the games industry?'");
alert(userName + ' answered ' + answerWork + '...');
answerWork = normalizeAnswer(answerWork);


if (answerWork === 'N') {
    alert("Correct! Get a load of this guy, I bet you'd be a great partner for Bar Trivia night. + 1 Gold Star sticker.");
} else if (answerWork === 'Y') {
    alert ("Nope, wrong. I'm not a good enough artist :') I'm not crying, you are.");
} else alert ("Okay, you actually owe me points now. 'YES' OR 'NO' ANSWERS");

let answerEducation = prompt('Do I have a degree in Game Programming?');
//console.log(userName + " said " + answerEducation + " to the question 'Do I have a degree in Game Programming?'");
alert(userName + ' answered ' + answerEducation + '...')
answerEducation = normalizeAnswer(answerEducation);


if (answerEducation === 'N') {
    alert('That is correct! I do not have a degre in Game Programming, its actually in Game Art & Design. +1 Expired Coupon for FruitStripe gum');
} else if (answerEducation === 'Y') {
    alert('Incorrect! You know, after spending 2 days in class together I thought you would know me better than this.');
} else alert("I'm not even going to say anything anymore. You're being shunned.");

let answerMusic = prompt('Do I listen to Spice Girls?');
//console.log(userName + " said " + answerPet + " to the question 'Do I have a pet?'")
alert(userName + ' answered ' + answerMusic + '...');
answerMusic = normalizeAnswer(answerMusic);


if (answerMusic === 'Y') {
    alert("Correct! Spice girls are a vibe and you can't change my mind. +1 point!!!");
} else if (answerMusic === 'N') {
    alert("Wrong. Spice girls are dope. Even if you answered the other 4 correctly you failed the test now.");
} else alert ("Un-shun. Have you not learned anything? Re-shun.");

alert("Thank you for playing 'Wow, Who The Heck Is This Guy Anyways?', " + userName +" We'll see you next time!");