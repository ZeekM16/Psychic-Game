<script type="text/javascrpt" src="assets/javascript/game.js"></script>

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(letters);
        var UserText = document.getElementById(UserText);
        var ComputerChoice = document.getElementById(CompositionChoice);
        var Wins
        var Losses
        var Guesses = 10;


        var ComputerChoice = ComputerChoice[Math.floor(math.random() *ComputerChoice.length)];

        document.onekeyup = function(event) {
                var letters = event.key;


        }
        Guesses = prompt ("whats your guess?");

        for (i = 0; 1 < ComputerChoice.length; i++);{
            if (answer == guess){
                alert("correct!");
                break;
            }else {
                guess == prompt("Try again");
            }
        }



 