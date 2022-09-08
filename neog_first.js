var readlineSync = require('readline-sync');
var score = 0;
function game() {
    console.log("Welcome to the Game!")
    var username = readlineSync.question("enter your name :");
    console.log("welcome!" + " " + username);
    var answer = readlineSync.question("Do You Know Matangi?  ");
    console.log(answer + "  " + "Okay! Lets start the game.");
};
//array of questions
var questions = [{
    question: "what is my fav food? \n",
    answer: "waffle",
},
{
    question: "where do I live?  ",
    answer: "chikhli",
},
{
    question: "Name of my fav superhere is?  ",
    answer: "dhwanil",
}];
/*function game2(qestion, answer) {
    var result = questions.filter((item) => {
        console.log(item);
    })

};*/
function game2(question, answer) {
    var userans = readlineSync.question(question);

    if (userans.toUpperCase() === answer.toUpperCase()) {
        console.log("Yeah! Right Answer");
        score = score + 1;
    }
    else {
        console.log("Wronge answer!");
    }
    console.log("Your score is : " + score);
    console.log("-*-*-*-*-*-*-*-*-*-*-*-");

}
function final() {
    for (var i = 0; i < questions.length; i++) {
        var que = questions[i];
        game2(que.question, que.answer)
    }
}
game()
final()