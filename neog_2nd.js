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
    question: "what is my fav food? \n Answer : ",
    answer: "waffle",
},
{
    question: "where do I live?  \n",
    answer: "chikhli",
},
{
    question: "Name of my fav superhere is?  \n",
    answer: "superman",
},
{
    question: "Name the my fav web-series   \n",
    answer: "mismatched",
},
{
    question: "My fav charactar from FRIENDS  \n",
    answer: "monica",
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
function finalScore() {
    console.log("Your final score is : " + score);

}
game()
final()
finalScore()