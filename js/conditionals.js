"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(colorName) {
    if (colorName === "blue") {
        return ("Awesome! My Favorite color is " + colorName + " as well!");
    }
    else if (colorName === "purple") {
        return ("No Way! My favorite football team has the color " + colorName + " as their main color!");
    }
    else {
        return ("That's cool! " + colorName.charAt(0).toUpperCase() + colorName.slice(1) + " isn't my favorite color, but everyone has their own personal preference!");
    }
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));;

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
var favoriteColor = prompt("What is your favorite color?")
switch(favoriteColor) {
    case "blue":
        alert("Awesome! My Favorite color is " + favoriteColor + " as well!");
        break;
    case "purple":
        alert("No Way! My favorite football team has the color " + favoriteColor + " as their main color!");
        break;
    default:
        alert("That's cool! " + favoriteColor.charAt(0).toUpperCase() + favoriteColor.slice(1) + " isn't my favorite color, but everyone has their own personal preference!");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorForTheFunction = prompt("What is your favorite color?");

analyzeColor(colorForTheFunction); {
    alert(colorForTheFunction + " is your favorite color!");

}



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var luckyNumber = Math.floor((Math.random() * 6));
// var totalAmount = prompt("What is the total amount of your bill?")
//
//
// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 0) {
//         return totalAmount;
//     }
//         else if (luckyNumber === 1) {
//             // return .10 * totalAmount;
//             alert("Your total is " + (.10 * totalAmount) + "!");
//     }
//         else if (luckyNumber === 2) {
//             // return .25 * totalAmount;
//             alert("Your total is " + (.25 * totalAmount) + "!");
//
//     }
//         else if (luckyNumber === 3) {
//             // return .35 * totalAmount;
//             alert("Your total is " + (.35 * totalAmount) + "!");
//
//     }
//         else if (luckyNumber === 4) {
//             // return .50 * totalAmount;
//             alert("Your total is " + (.50 * totalAmount) + "!");
//
//     }
//         else if (luckyNumber === 5) {
//             alert("Everything is free!");
//     }
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = prompt("What is your total Bill?");
function calculateTotal(luckyNumber, totalAmount) {
    return (luckyNumber * totalAmount);
    if (luckyNumber === 0) {
        alert("Your total is " + totalAmount + ", because you have no discount!")
    }
        else if (luckyNumber === 1) {
            // return .10 * totalAmount;
            alert("Your lucky number is " + luckyNumber + ", your discount is 10%, your price before the discount is added is " + totalAmount + ", and your price after the discount is " + calculateTotal(luckyNumber *totalAmount) + "!");
    }
        else if (luckyNumber === 2) {
            // return .25 * totalAmount;
            alert("Your lucky number is " + luckyNumber + ", your discount is 25%, your price before the discount is added is " + totalAmount + ", and your price after the discount is " + calculateTotal(luckyNumber * totalAmount) + "!");

    }
        else if (luckyNumber === 3) {
            // return .35 * totalAmount;
            alert("Your lucky number is " + luckyNumber + ", your discount is 35%, your price before the discount is added is " + totalAmount + ", and your price after the discount is " + calculateTotal(luckyNumber * totalAmount) + "!");

    }
        else if (luckyNumber === 4) {
            // return .50 * totalAmount;
            alert("Your lucky number is " + luckyNumber + ", your discount is 50%, your price before the discount is added is " + totalAmount + ", and your price after the discount is " + calculateTotal(luckyNumber * totalAmount) + "!");

    }
        else if (luckyNumber === 5) {
            alert("Your lucky number is " + luckyNumber + " so everything is free for you!");
    }
}

console.log(calculateTotal(luckyNumber * totalAmount));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var enterNumber = confirm("Would you like to enter a number?");

    if (enterNumber === true) {
        var numberPrompt = parseInt(prompt("What is your number?"));
    }   else {
        alert("Okay, that's fine. You don't have to enter a number!");
    }   if (numberPrompt % 2 === 0) {
            alert("Your number is even!");
    }       else if (numberPrompt % 2 != 0) {
            alert("Your number is odd!");
    }   var negativePositive = numberPrompt >= 0
        var addOneHundred = numberPrompt + 100;


        alert("Here is your number with 100 added: " + addOneHundred) ;
        alert("It was " + negativePositive + " that your number is positive");




