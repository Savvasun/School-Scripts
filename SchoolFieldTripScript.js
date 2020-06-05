var adults = 0, chaperones = 0, children = 0;
var adultsCost = 10, childrenCost = 0.5, chaperoneCost = 2.5;
var price = 0;
var _combos = [];
var iters = 100;

while (_combos.length <= 100) {
    //Generates 3 random numbers (amount of adults, children, and chaperones)
    adults = 0, children = 0, chaperones = 0;
    adults = Math.floor(Math.random() * 100);
    children = Math.floor(Math.random() * 100);
    chaperones = Math.floor(Math.random() * 100);
    //ONLY ENABLE THIS FOR TESTNG, SLOWS DOWN CODE DRAMATICALLY
    //console.log("Random: " + adults.toString() + " adults, " + children.toString() + " children, " + chaperones.toString() + " chaperones.");

    //Evaluates the seats filled and money spent
    price = (adults * adultsCost) + (children * childrenCost) + (chaperones * chaperoneCost);
    seatsFilled = adults + children + chaperones;

    //This statement checks if all seats are filled and if all $100 are spent
    if (price == 100 && seatsFilled == 100) {
        //If so, it puts the combo in an array
        _combos.push(" " + adults.toString() + " adults, " + children.toString() + " children, " + chaperones.toString() + " chaperones");
        continue;
    }
    else {
        continue;
    }
}
//Filters out repeating ones
var combos = [...new Set(_combos)];

if (combos.length == 0){
    console.log("Not enough iterations to give valid answers.")
}
else{
    console.log("Outcome:" + combos);
}