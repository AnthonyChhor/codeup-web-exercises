console.log("Just making sure it works");
function showMultiplicationTable(input) {
   var i = 1;
   while (i <= 10) {
        console.log(input + " * " + i + " = " + (i * input));
        i++;
   }
}

showMultiplicationTable(7);