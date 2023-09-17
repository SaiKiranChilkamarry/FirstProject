console.log("Welcome to Tic tac toe")
let music = new Audio("tt_bg.mp3")
let aTurn = new Audio("ting.mp3")
let gameover=new Audio("go.mp3")
let turn = "0"


//Function to change the turn
const changeTurn = () => {

    return turn === "X"?"0": "X"

}
//Function to check win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    let winner = null;
    wins.forEach(e => {
        if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '' ) ) {
            winner = boxtexts[e[0]].innerText;
            document.querySelector('.win').getElementsByTagName('img')[0].style.width="200px";
                    
        }
    });
    return winner;
    

}

//Game Logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            aTurn.play();
            let winner = checkWin();
            if (winner) {
                music.pause();
                gameover.play();
                document.querySelector('.status').innerText = "hurree gameover!!!!" + winner + " Won";
            } else {
                
                document.querySelector('.status').innerText = "Turn for "+turn;
            }
           
        }
    });
})

//Add onclick listner to reset

const resetButton = document.querySelector('.botton');
const boxTextElements = document.querySelectorAll('.boxtext');

resetButton.addEventListener('click', () => {
  boxTextElements.forEach(element => {
    element.innerText = '';
  });
  document.querySelector('.status').innerText = "Turn for "+ 0;
  document.querySelector('.win').getElementsByTagName('img')[0].style.width="0px";
});

