document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdleft = 220;
  let birdBottom = 100;
  let gravity = 2;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdleft + 'px';
  }
  const timerId = setInterval(startGame, 20);

  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
  }

  function jump() {
    if (birdBottom <= 500) {
      birdBottom += 50;
    }
    bird.style.bottom = birdBottom + 'px';
  }
  document.addEventListener('keyup', control);

  function generateObstacles() {
    let obstacleLeft = 500;
    let obstacleBottom = 150;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + 'px';
  }

  generateObstacles()
});
