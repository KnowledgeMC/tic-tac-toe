//Javscript models
var turn = 'X';
var board = ['','','','','','','','',''];
var win = false;
var tie = false;

// //to change board variable--through JS---MODEL UPDATE
// board[4] = 'O' //changed board

/////////////VS.///////////////////////////
// //If you were to update the view directly
// var squares = document.querySelectorAll('.square');
// squares[4[.textContent= 'O';]

//Creating DRAW Function--Only updates the VIEW (No Logic)
function draw(){
    var squares = document.querySelectorAll('.square');
    for (var i = 0; i < squares.length; i++){
        squares[i].textContent = board[i];
    }

    document.querySelector('#turn').textContent = turn;

    if(win){
      document.querySelector('#result').textContent = win + ' Wins!';
    }
    else if (tie){
      document.querySelector('#result').textContent = 'TIE!';
    }
}
draw();

//WIN LOGIC--
//return 'X' if X wins, 'O' if O wins, 'tie' if tie, false if none
function winCheck(){
  var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (var i = 0; i < winCombos.length; i++) {
      var winCombo = winCombos[i];
      var boardA = board[winCombo[0]];
      var boardB = board[winCombo[1]];
      var boardC = board[winCombo[2]];
      console.log(winCombo);
      console.log(boardA, boardB, boardC);

      if (boardA !== '' && boardA === boardB  && boardB === boardC){
        win = boardA;
      }
  }
}


///Capture User Input--Event listeners on all squares,
///and then use that to determine what we'll draw on screen
var squares = document.querySelectorAll('.square');
for (var i=0; i < squares.length; i++){
    squares[i].addEventListener('click', function(event){
        ///Handle User Action Logic
        ///Figure out index of square that was clicked
        var index = 0;
        for (var j=0; j < squares.length; j++){
            if(squares[j] === event.target){
                index = j;
            }
        }
        /// Prevent Double-clicking on box that's been clicked already, exit out
        if (board[index] !== ''){
          return false;
        }

       ///Use index to update board and change turn
       ///AKA MODEL UPDATES
       ///The following line does a lot using two variables: index and turn
        board[index] = turn;

        /////CHECKING for WIN--it's a model update
        winCheck();

        //change the turn
        if (turn === 'X'){
            turn = 'O';
        }
        else{
            turn = 'X';
        }
        ///VIEW UPDATE
        draw();
    })
  }


