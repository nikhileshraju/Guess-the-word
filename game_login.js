function adduser(){
player1_name = document.getElementById("p1_name").value ;
player2_name = document.getElementById("p2_name").value ;

localStorage.setItem("player1",player1_name);
localStorage.setItem("player2",player2_name);

window.location = "game_page.html";
}
