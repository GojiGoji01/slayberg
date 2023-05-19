
    const polka = document.getElementById("polka");
    const cactus = document.getElementById("cactus");
    const scoreDisplay = document.getElementById("score");

    let count = 0;
    let speed = 1;
    let isPaused = true;

    document.addEventListener("keydown", function(event) {
        jump();
    });

function jump () {
    if (polka.classList!= "jump") {
        polka.classList.add("jump")
    }
    setTimeout ( function() {
        polka.classList.remove("jump")
        count += 100;
        scoreDisplay.textContent = count;

        if (count % 300 == 0 && speed > 0) {
            speed -= 0.01;
            cactus.style.setProperty("animation", `cactusMov ${speed}s  infinite linear`);
            
        }
    
        // // // if (count % 300 == 0 && speed > 0) {
        // //     speed -= 0.01;
        // //    {
        // //     esle (`cactusMov ${speed}s += 0.1s infinite linear `)
        //    }
    }, 300) 
}
function resetGame() {
    count = 0;
    speed = 1;
    scoreDisplay.textContent = count;
    cactus.style.setProperty("animation", "none");
    polka.style.top = "140px";
  }
  
  function startGame() {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
  
    startButton.addEventListener("click", function() {
      isPaused = !isPaused; 
      // Переключение состояния паузы
      if (!isPaused) {
        "startButton"
      }
    });
  }
  
  let isAlive = setInterval(function() {
    
      let polkaTop = parseInt(window.getComputedStyle(polka).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  
      if (cactusLeft < 50 && cactusLeft > 0 && polkaTop >= 140) {
        alert("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!SMOKE!!SMOKE!!SMOKE!!!SMOKE!!!SMOKE!!!!SMOKE!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ");
        clearInterval(isAlive);
        resetGame();
        startGame(); // Сброс игры к начальному состоянию
      }
      cactus.style.left = (parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))) + "px";
    
  }, 10);
