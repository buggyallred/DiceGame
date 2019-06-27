//create a array that holds all of the images values. Then  with math.random randomize the images displayed. there will also have
// to be a function.
// first an array with pics. then a function then var with array length. then var M that will get min(.floor) and max (length) and randomize that
// then change the specified sourc in querySelector from its current src to the M random values
var A = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png"];
var A1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png"];
function random1 (n){
  var l = Number(A.length -1);
 var M =   Math.floor(Math.random() * l);
  document.querySelector("img.img2").setAttribute("src", src = A[M]);



 var L1 = Number(A1.length -1);
 var M1 =   Math.floor(Math.random() * L1);
  document.querySelector("img").setAttribute("src", src = A1[M1]);
  // Compare values and change h1 to say who won.
  if (M > M1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
  else if (M < M1){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  }
  else {
  document.querySelector("h1").innerHTML = "Draw!";
}
return M1, M ;

}
random1();

// Set h1 to tell which player has won. player 1 or 2 or if its a draw. Use is statement to compare and display.
