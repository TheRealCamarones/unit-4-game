//make a variable to keep track of the number of times the image is clicked
var counter = 0;
// create a random number to target between 19 and 120
var targetNumber = Math.floor(Math.random() * 120 + 19);
// on the click of the crystal image
$(".crystal-image").on("click", function() {
        // increase the counter by one when it's clicked
    counter += 1;
    // we don't need this test in the log anymore, so we switch it to display the counter - which eventually will need to be a more complex variable
    $("#currentScore").html(counter);
    // show the target number in the target-display div
    $("#target-display").html(targetNumber);
});