const klava = document.getElementById('klava');
const kamen = document.getElementById('kamen');
let scoreDisplay = document.createElement('div');
document.body.appendChild(scoreDisplay);
scoreDisplay.id = 'score';
scoreDisplay.innerText = 'Счёт: 0';

let isJumping = false;
let score = 0;

// Обработчик прыжка
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

// Проверка столкновения и обновление счёта
setInterval(() => {
  let klavaTop = parseInt(
    window.getComputedStyle(klava).getPropertyValue('top')
  );
  let kamenLeft = parseInt(
    window.getComputedStyle(kamen).getPropertyValue('left')
  );

  if (kamenLeft < 30 && kamenLeft > 0) {
    if (klavaTop < 8) {
      // Klava прыгает над камнем
      score++;
      scoreDisplay.innerText = `Счёт: ${score}`;
    } else {
      // Столкновение
      alert(`GAME OVER!! Ваш счёт: ${score}`);
      score = 0;
      scoreDisplay.innerText = `Счёт: ${score}`;
    }
  }
}, 100);

// const klava = document.getElementById('klava');
// const kamen = document.getElementById('kamen');
// const scoreDisplay = document.getElementById('score'); // Используем HTML-элемент

// let isJumping = false;
// let score = 0;

// document.addEventListener('keydown', function (event) {
//   if (event.code === 'Space' && !isJumping) {
//     jump();
//   }
// });

// function jump() {
//   isJumping = true;
//   klava.classList.add('jump');

//   setTimeout(() => {
//     klava.classList.remove('jump');
//     isJumping = false;
//   }, 500);
// }

// setInterval(() => {
//   let klavaTop = parseInt(
//     window.getComputedStyle(klava).getPropertyValue('top')
//   );
//   let kamenLeft = parseInt(
//     window.getComputedStyle(kamen).getPropertyValue('left')
//   );

//   if (kamenLeft < 30 && kamenLeft > 0) {
//     if (isJumping) {
//       score++;
//       scoreDisplay.innerText = `Счёт: ${score}`;
//     } else {
//       alert(`GAME OVER!! Ваш счёт: ${score}`);
//       score = 0;
//       scoreDisplay.innerText = `Счёт: ${score}`;
//     }
//   }
// }, 100);
