"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my Website!");

// Favorite color

var userFavoriteColor = prompt("What is your favorite color?");

alert("Great, your favorite color is " + userFavoriteColor + ", mine is Baltimore Ravens purple!");

// Price of the movies

const pricePerDay = prompt("Price of movie per day: ");

var littleMermaid = prompt("How many days did you have The Little Mermaid?");

var hercules = prompt("How many days did you have Hercules?");

var brotherBear = prompt("How many days did you have Brother Bear?");

var totalPrice = (pricePerDay * littleMermaid) + (hercules * pricePerDay) + (brotherBear * pricePerDay);

alert("The total price you'll pay is $" + totalPrice + " for all of the movies!");

// How much you get paid for working

var google = prompt("How many hours did you work at Google?");

var googlePay = prompt("How much did Google pay you for that time period?");

var facebook = prompt("How many hours did you work at Facebook?");

var facebookPay = prompt("How much did Facebook pay you for that time period?");

var amazon = prompt("How many hours did you work at amazon?");

var amazonPay = prompt("How much did Amazon pay you for that time period?");

var googleTotal = googlePay * google;

var facebookTotal = facebookPay * facebook;

var amazonTotal = amazonPay * amazon;

var totalPay = googleTotal + facebookTotal + amazonTotal;

alert("The total amount you'll be paid is $" + totalPay + " for the work week!");

// Class enrollment

var totalCLassSize = prompt("What is the total class size?");

var currentClassSize = prompt("What is the current class size");

var workingHours = confirm("Do these class hours work for the student?");

var canEnroll = (totalCLassSize > currentClassSize) && workingHours;

alert("It is " + canEnroll + " that the student that the student can enroll for class!");

// premium offer for discount

var premiumMember = confirm("Are you a premium member?");

var offerValid = confirm("Is the offer still valid?");

var shoppingCartSize = prompt("How many items do you have?");

var canHaveDiscount = offerValid && (shoppingCartSize > 2 || premiumMember);

alert("It is " + canHaveDiscount + "! The product offer can be applied for a discount!");