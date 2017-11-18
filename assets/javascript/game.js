var wordbank = [
    ["T", "R", "E", "E", "H", "O", "U", "S", "E"],
    ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"],
    ["W", "E", "B", "D", "E", "S", "I", "G", "N"],
    ["E", "D", "U", "C", "A", "T", "I", "O", "N"],
    ["C", "H", "O", "C", "O", "L", "A", "T", "E"],
    ["G", "E", "R", "M", "A", "N", "Y"]
]
var random = Math.floor((Math.random() * (wordbank.length - 1)));

var letterchoice = wordbank[random];
var checkword = new Array(letterchoice.length);
var score = 0;

for (var i = 0; i < checkword.length; i++) {
    checkword[i] = "_ ";
}

function printCheckword() {
    for (var i = 0; i < checkword.length; i++) {
        var guessarea = document.getElementById("guessarea");
        var wordvar = document.createTextNode(checkword[i]);
        guessarea.appendChild(wordvar);
    }
}

var lettercheck = function() {
    var f = document.rateformular;
    var b = f.elements["choicevar"];
    var letterchosenvar = b.value;
    letterchosenvar = letterchosenvar.toUpperCase();
    for (var i = 0; i < letterchoice.length; i++) {
        if (letterchoice[i] === letterchosenvar) {
            checkword[i] = letterchosenvar + " ";
            var bool = true;
        }
        b.value = "";
    }

    var guessarea = document.getElementById("guessarea");
    guessarea.innerHTML = "";
    printCheckword();

    if (!bool) {
        var generate = document.getElementById("generate");
        var wordvar = document.createTextNode(" " + letterchosenvar);
        generate.appendChild(wordvar);
        score++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + score + ".png";
    }

    var totalcheck = true;
    for (var i = 0; i < checkword.length; i++) {
        if (checkword[i] === "_ ") {
            totalcheck = false;
        }
    }
    if (totalcheck) {
        window.alert("You win!");
    }

    if (score === 6) {
        window.alert("Don't quit your day job.");
    }
}

function init() {
    printCheckword();
}

window.onload = init;