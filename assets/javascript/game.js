//make a variable to keep track of the number of times the image is clicked
var counter = 0;
// create a random number to target between 19 and 120
var targetNumber = Math.floor(Math.random() * 120 + 19);
// I guess for now just to make it work I could just assign each photo a spot in an array and then reference it down in the loop to give them value
var crystalChoices = [$("#first-crystal"), $("#second-crystal"), $("#third-crystal"), $("#fourth-crystal")]
// make an array to fill with potential crystal numbers, slightly worried about the possibility of random numbers making the game unwinnable, but we'll see
var valueOptions = []
// and then fill the array up with randos
for (var i = 0; i < 4; i++) {
    // four random numbers between 1 and 12 in the array
    valueOptions[i] = Math.floor(Math.random() * 12 + 1);
    // target the pictures one at a time to assign the values as they are added to the array
    crystalChoices[i].attr("data-crystal-value", valueOptions[i]);
}
// on the click of the crystal image
$(".crystal-image").on("click", function() {
    // create a new variable that holds the value of the clicked crystal
    // this knows contextually we mean what was clicked, attr takes the value and assigns it
    var crystalValue = ($(this).attr("data-crystal-value"));
    crystalValue = parseInt(crystalValue)
    // increase the counter by one when it's clicked
    counter += crystalValue;
    // we don't need this test in the log anymore, so we switch it to display the counter - which eventually will need to be a more complex variable
    $("#currentScore").html(counter);
    // show the target number in the target-display div
    $("#target-display").html(targetNumber);
});