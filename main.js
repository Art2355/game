let   input    = document.querySelector('.input'),
      btn      = document.querySelector('.btn'),
      timeOut  = document.querySelector('.time'),
      gameZone = document.querySelector('.game__block'),
      score    = 0,
      gameTime = 0,
      interval = 0,
      shape = document.querySelector('.shape');
      
      
btn.addEventListener('click', () =>{
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        clearInterval(interval)
        startGame()
    }else{
        alert('Минимум нужно 5 секунд для запуска игры')
    }
})


gameZone.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')){
        score++
        event.target.remove()
        createBall()
    }
})



function startGame() {
   timeOut.innerHTML = gameTime
   interval = setInterval(() => decreaseTime(), 1000)
   createBall()
   
}


function decreaseTime() {
    if(gameTime == 1) {
        timeOut.innerHTML = 0
        endGame()
    }else {
        timeOut.innerHTML = --gameTime
    }
}


function endGame() {
    gameZone.innerHTML = `<h2 class="result">Вы набрали ${score} Баллов </h2>`
}

function createBall() {
    
    let ball = document.createElement('div')
    ball.classList.add('ball')
    
    let size = 100
    
    ball.style.width = size +'px'
    ball.style.height = size +'px'
    ball.style.backgroundColor = 'yellow' 
    
   
    let coor = gameZone.getBoundingClientRect()
    
    let leftValue = random(0, coor.width  - size)
    let topValue = random(0, coor.height - size)
    
    ball.style.top = topValue + 'px'
    ball.style.left = leftValue + 'px'
    
    let randomSize = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        ball.style.width = randomSize + 'px';
        ball.style.height = randomSize + 'px';
        
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        ball.style.backgroundColor = randomColor;
        
    gameZone.append(ball)
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) +min)
}











    

      