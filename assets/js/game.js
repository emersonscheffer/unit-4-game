// random number from 19 - 120
function genRandNum() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $('#randNumber').text(randomNumber);
}
genRandNum();

// random number from 1 -12
function crystalNumberGen() {
    var crystalNumber = Math.floor(Math.random() * 11) + 1;
    return crystalNumber;
}

var button1 = new Btn;
var button2 = new Btn;
var button3 = new Btn;
var button4 = new Btn;

function newBtnValues() {
    button1.setValue(crystalNumberGen());
    button2.setValue(crystalNumberGen());
    button3.setValue(crystalNumberGen());
    button4.setValue(crystalNumberGen());
}
newBtnValues();

//wins
var wins = 0;
$('#wins').text(wins);

//losses
var losses = 0;
$('#losses').text(losses);

// sum of numbers
var sum = 0;

$('#sum').text(sum);


$('#cBtn1').click(function(){
    sum = sum + button1.getValue();
    $('#sum').text(sum);
    win();
    lose();
});

$('#cBtn2').click(function(){
    sum = sum + button2.getValue();
    $('#sum').text(sum);
    win();
    lose();
});

$('#cBtn3').click(function(){
    sum = sum + button3.getValue();
    $('#sum').text(sum);
    win();
    lose();
});

$('#cBtn4').click(function(){
    sum = sum + button4.getValue();
    $('#sum').text(sum);
    win();
    lose();
});
// if you win
function win() {
    if (sum == $('#randNumber').text()) {
        reseting();
        wins++;
        $('#wins').text(wins);
    }
}
// if you lose
function lose() {
    if (sum > $('#randNumber').text()) {
        reseting();
        losses++;
        $('#losses').text(losses);
    }
}
//resesting the values
function reseting() {
    genRandNum();
    newBtnValues();
    sum = 0;
    $('#sum').text(sum);
}