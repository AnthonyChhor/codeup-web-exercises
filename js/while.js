let i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
var soldCones = Math.floor(Math.random() * 5) + 1;
var newAmountOfCones = allCones - soldCones;
do {
    console.log( allCones + " is the amount of cones you have!");
    console.log(soldCones + " cones were sold!");

    console.log("Your new amount of cones is " + (allCones -= soldCones) + "!")
    if (allCones <= 0) {
        console.log("Sorry, can't sell you " + allCones + " cones.");
    }

} while(allCones > 0);


