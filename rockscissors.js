
  let score = JSON.parse(localStorage.getItem('score')) || {

    wins: 0,
    loses: 0,
    ties: 0
  };
    
  updateScoreElement();
  

  let isAutoPlay= false;
  let intervalId;

  function autoPlay(){
    if(!isAutoPlay){
       intervalId= setInterval(function(){
     const playerMove= pickComputerMove();
        playGame(playerMove);
      },1000);
      isAutoPlay= true;
    }
    else{
      clearInterval(intervalId);
      intervalId= false;
    }
  }

  document.querySelector('.js-rock-button')
   .addEventListener('click',()=>{
    playGame('Rock');
   });

   document.querySelector('.js-paper-button')
   .addEventListener('click',()=>{
    playGame('Paper');
   });

   document.querySelector('.js-scissors-button')
   .addEventListener('click',()=>{
    playGame('Scissors');
   });
 
function playGame(playerMove){

    const computerMove = pickComputerMove();
          
    let result = '';

        if (playerMove=== 'Rock'){
            if (computerMove==='Rock'){
                result = 'tie';
                }else if (computerMove==='Paper'){
                result = 'win';
                }else if (computerMove==='Scissors'){
                result = 'lose';
                }
        }
    
        else if (playerMove==='Paper'){
            if (computerMove==='Paper'){
                result = 'tie';
                }else if (computerMove==='Scissors'){
                  result = 'Win';
                }else if (computerMove==='Rock'){
                  result = 'lose';
        
                }
            }        
        
        else if (playerMove=== 'Scissors'){
            if (computerMove==='Scissors'){
                result = 'tie';
                }else if (computerMove==='Paper'){
                  result = 'lose';
                }else if (computerMove==='Rock'){
                  result = 'win';
                }

        }

        if(result==='win'){
            score.wins += 1;
        }else if (result==='lose'){
            score.loses+= 1;
        }else if (result==='tie'){
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML =` You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        computer`;

}

  function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}`;
  }

    function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';

    if (randomNumber >=0 && randomNumber < 1/3){
        computerMove ='Rock';
    } else if (randomNumber >=1/3 && randomNumber < 2/3){
        computerMove ='Paper';
    } else if (randomNumber >=2/3 && randomNumber < 1){
        computerMove ='Scissors';}

        return computerMove;
    }
  
