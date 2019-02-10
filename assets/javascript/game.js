//make a variable to keep track of the number of times the image is clicked
var counter = 0;

// on the click of the crystal image
$(".crystal-image").on("click", function() {
        // increase the counter by one when it's clicked
    counter += 1;
    // register a test in the log to make sure it's working
    console.log("You have clicked a crystal and your score is " + counter);
});