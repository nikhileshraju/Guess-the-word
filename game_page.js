player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("name_p1").innerHTML = player1 + ":";
document.getElementById("name_p2").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

question_turn = "player1";
answer_turn = "player2";

document.getElementById("player_question").innerHTML = "question turn -" + player1;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2;

function send() {
    get_word = document.getElementById("player_input").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    c1 = word.charAt(1);
    c2 = word.charAt(Math.floor(word.length / 2));
    c3 = word.charAt(word.length - 1);

    remove_c1 = word.replace(c1, "_");
    console.log("Character 1 has been replaced" + remove_c1);
    remove_c2 = remove_c1.replace(c2, "_");
    console.log("Character 2 has been replaced" + remove_c2);
    remove_c3 = remove_c2.replace(c3, "_");
    console.log("Character 3 has been replaced" + remove_c3);

    question_word = "<h4 id='word_display'> Q. " + remove_c3 + "</h4>";
    input_box = "<br> <br> answer: <input type='text' id='inputbox'>";
    button_check = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";

    row = question_word + input_box + button_check;

    document.getElementById("output").innerHTML = row;

    console.log(row)

    document.getElementById("player_input").value = "";

}



function check() {
    get_answer = document.getElementById("inputbox").value;
    answer = get_answer.toLowerCase();
    console.log("The answer is " + answer);

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1;

    }
    document.getElementById("output").innerHTML = "";
}