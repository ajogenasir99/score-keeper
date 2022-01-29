const player1Btn = document.querySelector('#player1');
const player2Btn = document.querySelector('#player2');
const player1score = document.querySelector('.p1score');
const player2score = document.querySelector('.p2score');
const selectBtn = document.querySelector('#playto');
const resetBtn = document.querySelector('#reset');
let winningScore = 5
let isGameOver = false;

const player1 = {
    score: 0,
    button: player1Btn,
    display: player1score
}



const player2 = {
    score: 0,
    button: player2Btn,
    display: player2score
}

function updateScore(player,opponent){
    if(!isGameOver){
        player.score++;
        if(player.score === winningScore){
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled  = true;
            player.display.classList.toggle('winner');
            opponent.display.classList.toggle('loser');
        }
        player.display.innerText = player.score;
    }
}


player1Btn.addEventListener('click', function(e) {

    updateScore(player1,player2);

})

player2Btn.addEventListener('click', function(e) {

    updateScore(player2,player1);

})

selectBtn.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    reset();
})

resetBtn.addEventListener('click', (e) => {
    reset();
})

function reset() {
    isGameOver = false;
    for(let player of [player1,player2]){
        player.score = 0;
        player.display.textContent = 0;
        player.button.disabled = false;
        player.display.classList.remove('winner', 'loser');
    }
}

