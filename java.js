"use strict";
var p1,p2;
var turn;

// this is a module pattern 
var myBoard = (function(){
    var p1Score = document.getElementById('p1Score');
    var p2Score = document.getElementById('p2Score');
    
    var gameBoard = ['','','','','','','','',''];
    //DONE
    const resetBoardstate =()=>{
        document.getElementById('p1div').style.backgroundColor = "rgba(71, 133, 168,0.6)";
        // document.getElementById('p1div').style.boxShadow = "0px 0px 15px gray";
        document.getElementById('p2div').style.backgroundColor = "white";
        document.getElementById('p2div').style.boxShadow = "";
        gameBoard = ['','','','','','','','',''];
        let divs = document.getElementsByClassName('Div');
        for(let i = 0 ; i < 9 ; i++){
            divs[i].style.backgroundImage = '';
        }
        turn = 1;
        console.log(`turn is ${turn}`);
        p1Score.innerHTML = 0;
        p2Score.innerHTML = 0;
    }
    const resetTurn= ()=>{
        document.getElementById('p1div').style.backgroundColor = "rgba(71, 133, 168,0.6)";
        // document.getElementById('p1div').style.boxShadow = "0px 0px 15px gray";
        document.getElementById('p2div').style.backgroundColor = "white";
        document.getElementById('p2div').style.boxShadow = "";
        gameBoard = ['','','','','','','','',''];
        let divs = document.getElementsByClassName('Div');
        for(let i = 0 ; i < 9 ; i++){
            divs[i].style.backgroundImage = '';
        }
        turn = 1;
        console.log(`turn is ${turn}`);
    }
    //DONE
    const initalize = ()=>{
        let divs = document.getElementsByClassName('Div');
        document.getElementById('p1div').style.backgroundColor = "rgba(71, 133, 168,0.6)";
        // document.getElementById('p1div').style.boxShadow = "0px 0px 15px gray";
        document.getElementById('p2div').style.backgroundColor = "white";
        document.getElementById('p2div').style.boxShadow = "";
        for(let i = 0 ; i < 9 ; i++){
                divs[i].addEventListener("click",function(){
                    if(this.style.backgroundImage==''){
                        addMove(this.id);
                    }else{
                        
                    }
            
                });
        }
        turn = 1;
        console.log(`turn is ${turn}`);
    }
    //DONE
    const addMove = (id)=>{
        if(turn ==1){
            document.getElementById('p2div').style.backgroundColor = "rgba(71, 133, 168,0.6)";
            // document.getElementById('p2div').style.boxShadow = "0px 0px 15px gray";
            document.getElementById('p1div').style.backgroundColor = "white";
            document.getElementById('p1div').style.boxShadow = "";

            
            document.getElementById(`${id}`).style.backgroundImage = 'url(x.png)';
            gameBoard[id] = p1.sign;
            checkWinner();
            
            
        }else{
            document.getElementById('p1div').style.backgroundColor = "rgba(71, 133, 168,0.6)";
            // document.getElementById('p1div').style.boxShadow = "0px 0px 15px gray";
            document.getElementById('p2div').style.backgroundColor = "white";
            document.getElementById('p2div').style.boxShadow = "";
            document.getElementById(`${id}`).style.backgroundImage = 'url(O.png)';
            gameBoard[id] = p2.sign;
            checkWinner();
            

        }
    }

    const checkWinner = ()=>{
        var gameTied = true;
        var gameFinished = false;
        if((gameBoard[0]=='X' && gameBoard[1]=='X' && gameBoard[2]=='X') || (gameBoard[0]=='O' && gameBoard[1]=='O' && gameBoard[2]=='O')){
            gameFinished = true;
        }else if((gameBoard[3]=='X' && gameBoard[4]=='X' && gameBoard[5]=='X') || (gameBoard[3]=='O' && gameBoard[4]=='O' && gameBoard[5]=='O')){
            gameFinished = true;
        }else if((gameBoard[6]=='X' && gameBoard[7]=='X' && gameBoard[8]=='X') || (gameBoard[6]=='O' && gameBoard[7]=='O' && gameBoard[8]=='O')){
            gameFinished = true;
        }else if((gameBoard[0]=='X' && gameBoard[3]=='X' && gameBoard[6]=='X') || (gameBoard[0]=='O' && gameBoard[3]=='O' && gameBoard[6]=='O')){
            gameFinished = true;
        }else if((gameBoard[1]=='X' && gameBoard[4]=='X' && gameBoard[7]=='X') || (gameBoard[1]=='O' && gameBoard[4]=='O' && gameBoard[7]=='O')){
            gameFinished = true;
        }else if((gameBoard[2]=='X' && gameBoard[5]=='X' && gameBoard[8]=='X') || (gameBoard[2]=='O' && gameBoard[5]=='O' && gameBoard[8]=='O')){
            gameFinished = true;
        }else if((gameBoard[0]=='X' && gameBoard[4]=='X' && gameBoard[8]=='X') || (gameBoard[0]=='O' && gameBoard[4]=='O' && gameBoard[8]=='O')){
            gameFinished = true;
        }else if((gameBoard[2]=='X' && gameBoard[4]=='X' && gameBoard[6]=='X') || (gameBoard[2]=='O' && gameBoard[4]=='O' && gameBoard[6]=='O')){
            gameFinished = true;
        }else{
            for (let index = 0; index < 9; index++) {
                if(gameBoard[index]==''){
                    gameTied = false;
                }
            }
        }

        if(gameFinished == true){
            if(turn==1){
                p1Score.innerHTML = parseInt(p1Score.innerHTML) + 1;
                document.getElementById('who-won-p').innerHTML ='Player One Won';
                resetTurn();
                $('#who-won').slideDown();
            }else{
                p2Score.innerHTML = parseInt(p2Score.innerHTML) + 1;
                document.getElementById('who-won-p').innerHTML ='Player Two Won';
                resetTurn();
                $('#who-won').slideDown(); 
            }
            return
            
        }else if(gameTied == true){
            document.getElementById('who-won-p').innerHTML ='Tie';
            $('#who-won').slideDown(); 
            resetTurn();
            turn = 1;
            return
        }else{
            if(turn == 1){
                turn = 2;
            }else{
                turn = 1;
            }
        }
    }

    // These are the values to be accessed from the module
    return {
        initalize,
        resetBoardstate
    }

})(p1,p2);

//DONE
var playerFactory = function(name,sign){
    return {
        name, sign
    }
}

var Game = (function(){
    var startGame = () =>{
        console.log('game started');
        p1 = playerFactory('Player One','X');
        p2 = playerFactory('Player two','O');
        myBoard.initalize(p1,p2);
    }

    return {
        startGame
    }
})();



$('#start-game-btn').on('click',function(){
    $('#start-game').slideUp(800);
    Game.startGame();
});

$('#play-again').on('click',function(){
    $('#who-won').slideUp(800);
});

$('#start-over').on('click',function(){
    myBoard.resetBoardstate();
    $('#who-won').slideUp(800);
});

$('.Div').on({
    mouseenter: function(){
        $(this).css("background-color", "rgba(71, 133, 168,0.6)");
    },  
   
    mouseleave: function(){
        $(this).css("background-color", "whitesmoke");
    },

});










