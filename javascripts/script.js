const klava = document.getElementById('klava');
const kamen = document.getElementById('kamen');

document.addEventListener('keydown', function () {
  jump();
});

function jump() {
  if (!klava.classList.contains('jump')) {
    klava.classList.add('jump');
  }
  setTimeout(function () {
    klava.classList.remove('jump');
  }, 500);
}

let isAlive = setInterval(function () {
  let klavaTop = parseInt(
    window.getComputedStyle(klava).getPropertyValue('top')
  );
  let kamenLeft = parseInt(
    window.getComputedStyle(kamen).getPropertyValue('left')
  );

  //   if (kamenLeft < 30 && kamenLeft > 0 && klavaTop > 10) {
  //     alert('GAME OVER!!');
  //     clearInterval(isAlive);
  //   }
}, 0);
