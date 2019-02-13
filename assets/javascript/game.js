// wait until the document is ready to run anything
$(document).ready(function () {
    //make my wins and losses variables
    var wins = 0;
    var losses = 0;
    //make a variable to keep track of the number of times the image is clicked
    var counter = 0;
    // create a random number to target between 19 and 120
    var targetNumber = Math.floor(Math.random() * 120 + 19);
    // show the number to the user from the start
    $("#target-display").text("Target Number: " + targetNumber);
    // show the counter to the user from the start
    $("#score-display").text("Your Total Score Is: " + counter);
    // might as well show them the wins and losses counters from the start as well
    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);
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
    // this function is key because it will enable us to reset the in game statistics without having to refresh the page
    function reset() {
        // reset the random number variable
        targetNumber = Math.floor(Math.random() * 120 + 19);
        // display the new randomly assigned target number
        $("#target-display").text("Target Number: " + targetNumber);
        // refill my array with new randomly assigned numbers for each crystal
        for (var i = 0; i < 4; i++) {
            valueOptions[i] = Math.floor(Math.random() * 12 + 1)
            crystalChoices[i].attr("data-crystal-value", valueOptions[i]);
        };
        counter = 0;
        $("#score-display").text("Your Total Score Is: " + counter);
    }
    // the gameLoss function will run in the conditional at the bottom
    function gameLoss() {
        // alert the user they lost
        alert("Sorry, you lose, try again!");
        // increment losses
        losses++;
        // display the new losses total
        $("#losses-text").text("Losses: " + losses);
        // run the reset function
        reset();
    }

    // gameWin will run in the conditional at the bottom
    function gameWin() {
        // alert the user they won with a fun congratulatory message
        alert("Winner, winner, chicken dinner! You got " + targetNumber + ". Play again!");
        // increment wins
        wins++;
        // display the new win total
        $("#wins-text").text("Wins: " + wins);
        // run the reset function
        reset();
    }
    // on the click of the crystal image
    $(".crystal-image").on("click", function () {

        // create a new variable that holds the value of the clicked crystal
        // this knows contextually we mean what was clicked, attr takes the value and assigns it
        var crystalValue = ($(this).attr("data-crystal-value"));
        crystalValue = parseInt(crystalValue)

        // and now that we have a different number to increase the counter by, we go up by the individual contextual value
        counter += crystalValue;
        // we don't need this test in the log anymore, so we switch it to display the counter
        $("#score-display").text("Your Total Score Is: " + counter);
        // show the target number in the target-display div
        $("#target-display").text("Target Number: " + targetNumber);
        // set a conditional for the game to be won or lost
        // it will only run on a win or loss, so as long as the counter is under the target number this won't even be noticed
        if (counter > targetNumber) {
            gameLoss()
        } else if (counter === targetNumber) {
            gameWin()
        }
    });
});