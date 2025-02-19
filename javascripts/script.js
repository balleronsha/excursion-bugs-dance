const klava = document.getElementById('klava');
const kamen = document.getElementById('kamen');
let scoreDisplay = document.createElement('div');
document.body.appendChild(scoreDisplay);
scoreDisplay.id = 'score';
scoreDisplay.innerText = 'Счёт: 0';

let isJumping = false;
let score = 0;

// Функция прыжка
function jump() {
  if (!isJumping) {
    isJumping = true;
    klava.classList.add('jump');

    setTimeout(() => {
      klava.classList.remove('jump');
      isJumping = false;
    }, 500);
  }
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});

// Проверка столкновения (ТОЛЬКО когда KLAVA и KAMEN пересекаются)
setInterval(() => {
  let klavaTop = parseInt(
    window.getComputedStyle(klava).getPropertyValue('top')
  );
  let kamenLeft = parseInt(
    window.getComputedStyle(kamen).getPropertyValue('left')
  );

  // Если камень в зоне Klava и Klava на земле - GAME OVER
  if (kamenLeft > 10 && kamenLeft < 35 && klavaTop >= 8) {
    alert(`GAME OVER!! Ваш счёт: ${score}`);
    score = 0; // Обнуление счёта
    scoreDisplay.innerText = `Счёт: ${score}`;
  }
}, 50);
