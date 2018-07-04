console.log("This is crystal collector");
//global variables are created
$(document).ready(function () {
  var numbers = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33",
    "34", "35", "36", "37", "38", "39", "40"];
  console.log(numbers[5]);

  //Replacing html text with random number
  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  $("#random-number").text(randomNumber);

  //Creating different values that the crystals can have
  var numberOptions = [3, 4, 5, 6, 7, 10];

  //Assigning each crystal a different value from the four values above
  var firstCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  var secondCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  var thirdCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  var fourthCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];

  //var set up for numbers

  var totalScore = 0;
  var wins = 0;
  var losses = 0;

  //linking number variables to html
  $("#score").text(totalScore);
  $("#wins").text(wins);
  $("#losses").text(losses);

  //Resetting the game after win or loss
  resetGame = function () {
    randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    $("#random-number").text(randomNumber);
    firstCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    secondCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    thirdCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    fourthCrystalNum = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    totalScore = 0;
    $("#score").text(totalScore);
  }

  //function created for a win
  winGame = function () {
    alert("Congrats! You won!");
    wins++;
    $("#wins").text(parseInt(wins));
    resetGame();
  }

  //function if there is a loss
  loseGame = function () {
    alert("Better Luck Next Time!");
    losses++;
    $("#losses").text(parseInt(losses));
    resetGame();

  }

  //crystals are given a click through jquery

  $("#crystal1").click(function () {
    totalScore = totalScore + firstCrystalNum;
    $("#score").text(totalScore);

    //if the score matches the randomNumber, initiate wins function
    if (randomNumber == totalScore) {
      winGame();
    }

    //if the score exceeds the random number, initiate loss function
    else if (randomNumber < totalScore) {
      loseGame();
    }
  });

  //if neither win nor loss, proceed to next cystals
  $("#crystal2").click(function () {
    totalScore = totalScore + secondCrystalNum;
    $("#score").text(totalScore);

    if (randomNumber == totalScore) {
      winGame();
    }

    else if (randomNumber < totalScore) {
      loseGame();
    }
  });

  $("#crystal3").click(function () {
    totalScore = totalScore + thirdCrystalNum;
    $("#score").text(totalScore);

    if (randomNumber == totalScore) {
      winGame();
    }

    else if (randomNumber < totalScore) {
      loseGame();
    }
  });

  $("#crystal4").click(function () {
    totalScore = totalScore + fourthCrystalNum;
    $("#score").text(totalScore);

    if (randomNumber == totalScore) {
      winGame();
    }

    else if (randomNumber < totalScore) {
      loseGame();
    }
  });

});






