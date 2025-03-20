window.onload = function () {
  // Добавляем задержку в 5 секунд
  setTimeout(() => {
    // Скрываем экран загрузки
    document.querySelector('.zagruzka').style.display = 'none';
    document.querySelector('.glavsvet').style.display = 'block';
  }, 5000);
};
//
//
//
//
//
//
//
//
// ЭТО ТЯЖЁЛЫЙ ЛЮКС 3D
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';

document.addEventListener('DOMContentLoaded', () => {
  initThree();
});

function initThree() {
  const container = document.querySelector('.zagruzka'); // Контейнер для 3D
  const width = container.clientWidth;
  const height = container.clientHeight;
  // Создаем сцену
  const scene = new THREE.Scene();
  // Камера
  const camera = new THREE.PerspectiveCamera(
    8,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(8, 0, 0);
  // Рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const play2Model = document.querySelector('.play2Model');
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  play2Model.appendChild(renderer.domElement);
  // Управление камерой
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxDistance = 10;
  controls.maxPolarAngle = Math.PI / 2.2;
  // --- Освещение ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
  dirLight.position.set(3, 6, 4);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.radius = 4;
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0xffe0bd, 1.5);
  fillLight.position.set(-3, 4, -2);
  scene.add(fillLight);

  const backLight = new THREE.PointLight(0xffe0bd, 1.2, 10);
  backLight.position.set(0, 3, -3);
  scene.add(backLight);

  // Пол (принимает тени)
  const groundGeometry = new THREE.PlaneGeometry(10, 10);
  const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.15 });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // Загрузка 3D-модели
  const loader = new GLTFLoader();
  loader.load(
    './3d/result.gltf',
    (gltf) => {
      const model = gltf.scene;

      model.traverse((node) => {
        if (node.isMesh) {
          node.material.roughness = 0.6; // Матовость
          node.material.metalness = 0.05; // Уменьшаем отражения
          node.material.envMapIntensity = 2; // Подчеркиваем объем
          // Сбрасываем позицию, поворот и масштаб
        }
      });

      // Добавляем модель на сцену
      scene.add(model);
    },

    undefined,
    (error) => {
      console.error('Ошибка загрузки модели:', error);
    }
  );

  // Анимация
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Адаптация под размер экрана
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

//
//
//
//
//
document.querySelector('.iconklava1').addEventListener('click', function () {
  // Получаем элементы
  const rech1 = document.querySelector('.rech1');
  const r1 = document.querySelector('.r1');

  // Проверяем текущее состояние элементов
  if (rech1.style.display === 'none' || rech1.style.display === '') {
    // Если элементы скрыты, показываем их
    rech1.style.display = 'block';
    r1.style.display = 'block';
  } else {
    // Если элементы видны, скрываем их
    rech1.style.display = 'none';
    r1.style.display = 'none';
  }
});

//
//
//
//
//
//
//
//
//
//
document.querySelector('.iconklava2').addEventListener('click', function () {
  // Получаем элементы
  const rech2 = document.querySelector('.rech2');
  const r2 = document.querySelector('.r2');

  // Проверяем текущее состояние элементов
  if (rech2.style.display === 'none' || rech2.style.display === '') {
    // Если элементы скрыты, показываем их
    rech2.style.display = 'block';
    r2.style.display = 'block';
  } else {
    // Если элементы видны, скрываем их
    rech2.style.display = 'none';
    r2.style.display = 'none';
  }
});
//
//
//
//
//
document.querySelector('.iconklava3').addEventListener('click', function () {
  // Получаем элементы
  const rech3 = document.querySelector('.rech3');
  const r3 = document.querySelector('.r3');

  // Проверяем текущее состояние элементов
  if (rech3.style.display === 'none' || rech3.style.display === '') {
    // Если элементы скрыты, показываем их
    rech3.style.display = 'block';
    r3.style.display = 'block';
  } else {
    // Если элементы видны, скрываем их
    rech3.style.display = 'none';
    r3.style.display = 'none';
  }
});
//
//
//
// 🤪 ЙОУ ПЕРЕХОД 1
document.querySelector('.play1').style.display = 'none';
document.querySelector('.shkafsvet').addEventListener('click', function () {
  document.querySelector('.glavsvet').style.display = 'none';
  document.querySelector('.play1').style.display = 'block';
});
document.querySelector('.strelka1').addEventListener('click', function () {
  document.querySelector('.play1').style.display = 'none';
  document.querySelector('.glavsvet').style.display = 'block';
});
// ИГРА 1 СО ШКАФЧИКАМИ
// ❗️ КРАСНЫЙ ЗАМОК
const dver2 = document.getElementById('dver2');
const zamochek = document.getElementById('zamochek');
dver2.addEventListener('click', () => {
  if (zamochek.style.display === 'none' || zamochek.style.display === '') {
    zamochek.style.display = 'flex';
  } else {
    zamochek.style.display = 'none';
  }
});
//
//
// УДАЛЕНИЕ ДВЕРЕЙ
document.querySelector('.dver1').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver3').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver4').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver5').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver6').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver7').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver8').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver9').addEventListener('click', function () {
  this.style.display = 'none';
});
document.querySelector('.dver10').addEventListener('click', function () {
  this.style.display = 'none';
});
// ❗️ ПЕРЕМЕЩЕНИЕ ПРЕДМЕТОВ В ЯЩИКАХ
$(document).ready(function () {
  $(
    '.iphone, .naush, .getri, .points, .giri, .roll, .stanley, .bag, .flowers, .instax'
  ).draggable();
  $('.allisonplate').droppable({
    accept: '.draggable',
    drop: function (event, ui) {
      const dropZone = $(this);
      const offset = dropZone.offset();
      const width = dropZone.width();
      const height = dropZone.height();
      ui.helper.css({
        left: offset.left + (width - ui.helper.width()) / 2,
        top: offset.top + (height - ui.helper.height()) / 2,
      });
    },
  });
});
//
//
//
//
//
//
//
//
// 🥸 УРАААА 2 ИГРААА
// Скрыть экран play2 изначально
document.querySelector('.play2').style.display = 'none';

// Обработчик для первого клика по dver402svet
document.querySelector('.dver402svet').addEventListener('click', function () {
  // Скрыть главный экран
  document.querySelector('.glavsvet').style.display = 'none';

  // Показать экран play1
  document.querySelector('.play2').style.display = 'block';
});

// Обработчик для клика по strelka2
document.querySelector('.strelka2').addEventListener('click', function () {
  // Скрыть экран play1
  document.querySelector('.play2').style.display = 'none';

  // Показать главный экран
  document.querySelector('.glavsvet').style.display = 'block';

  // Меняем изображение на dver402temnota
  document.querySelector('.dver402svet').src = 'images/dver402temnota.svg';
});
//
//
// КНОПКА 1 ПАУЗА
const knpl1 = document.querySelector('.knpl1');
const knpa1 = document.querySelector('.knpa1');
knpl1.addEventListener('click', () => {
  knpl1.style.display = 'none';
  knpa1.style.display = 'inline';
});
knpa1.addEventListener('click', () => {
  knpa1.style.display = 'none';
  knpl1.style.display = 'inline';
});
//
// КНОПКА 2 ПАУЗА
const knpl2 = document.querySelector('.knpl2');
const knpa2 = document.querySelector('.knpa2');
knpl2.addEventListener('click', () => {
  knpl2.style.display = 'none';
  knpa2.style.display = 'inline';
});
knpa2.addEventListener('click', () => {
  knpa2.style.display = 'none';
  knpl2.style.display = 'inline';
});
//
// КНОПКА 3 ПАУЗА
const knpl3 = document.querySelector('.knpl3');
const knpa3 = document.querySelector('.knpa3');
knpl3.addEventListener('click', () => {
  knpl3.style.display = 'none';
  knpa3.style.display = 'inline';
});
knpa3.addEventListener('click', () => {
  knpa3.style.display = 'none';
  knpl3.style.display = 'inline';
});
//
//
// ❗️ МУЗЫКААААААААА
document.addEventListener('DOMContentLoaded', function () {
  // Создаем треки с помощью Howler.js
  const tracks = [
    new Howl({ src: ['music/esmeralda.mp3'], html5: true }), // Трек 1
    new Howl({ src: ['music/swan.mp3'], html5: true }), // Трек 2
    new Howl({ src: ['music/masha.mp3'], html5: true }), // Трек 3
  ];

  let currentTrackIndex = -1; // Переменная для отслеживания текущего трека

  // Функция для воспроизведения трека
  function playTrack(index) {
    stopAllTracks(); // Останавливаем все треки перед воспроизведением нового
    currentTrackIndex = index; // Обновляем текущий индекс трека
    console.log('Воспроизведение трека: ' + index);
    tracks[index].play(); // Воспроизводим трек
  }

  // Функция для паузы трека
  function pauseTrack(index) {
    console.log('Пауза трека: ' + index);
    tracks[index].pause(); // Останавливаем текущий трек
  }

  // Функция для остановки всех треков
  function stopAllTracks() {
    tracks.forEach((track) => track.stop()); // Останавливаем все треки
  }

  // Привязываем кнопки для воспроизведения треков
  document
    .querySelector('.knpl1')
    .addEventListener('click', () => playTrack(0));
  document
    .querySelector('.knpl2')
    .addEventListener('click', () => playTrack(1));
  document
    .querySelector('.knpl3')
    .addEventListener('click', () => playTrack(2));

  // Привязываем кнопки для паузы треков
  document
    .querySelector('.knpa1')
    .addEventListener('click', () => pauseTrack(0));
  document
    .querySelector('.knpa2')
    .addEventListener('click', () => pauseTrack(1));
  document
    .querySelector('.knpa3')
    .addEventListener('click', () => pauseTrack(2));
});
document.querySelector('.knpl1').addEventListener('click', () => {
  document.querySelector('.knpa2').style.display = 'none';
  document.querySelector('.knpl2').style.display = 'inline';
});
document.querySelector('.knpl1').addEventListener('click', () => {
  document.querySelector('.knpa3').style.display = 'none';
  document.querySelector('.knpl3').style.display = 'inline';
});
document.querySelector('.knpl2').addEventListener('click', () => {
  document.querySelector('.knpa1').style.display = 'none';
  document.querySelector('.knpl1').style.display = 'inline';
});
document.querySelector('.knpl2').addEventListener('click', () => {
  document.querySelector('.knpa3').style.display = 'none';
  document.querySelector('.knpl3').style.display = 'inline';
});
document.querySelector('.knpl3').addEventListener('click', () => {
  document.querySelector('.knpa1').style.display = 'none';
  document.querySelector('.knpl1').style.display = 'inline';
});
document.querySelector('.knpl3').addEventListener('click', () => {
  document.querySelector('.knpa2').style.display = 'none';
  document.querySelector('.knpl2').style.display = 'inline';
});
//
//
//
//
//
//
//
// 🫣 УРАААА 3 ИГРААА
// Скрыть экран play2 изначально
document.querySelector('.play3').style.display = 'none';
// Обработчик для первого клика по dver402svet
document.querySelector('.dverconsvet').addEventListener('click', function () {
  // Скрыть главный экран
  document.querySelector('.glavsvet').style.display = 'none';
  document.querySelector('.play3').style.display = 'block';
});
// Обработчик для клика по strelka2
document.querySelector('.strelka3').addEventListener('click', function () {
  document.querySelector('.play3').style.display = 'none';
  document.querySelector('.glavsvet').style.display = 'block';

  // Меняем изображение на dver402temnota
  document.querySelector('.dverconsvet').src = 'images/dvercontemnota.svg';
});

//
//
//
//
//РИСОВАЛОЧКА МОЯ КРИВАЯ ЛЮБИМАЯ 😇
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawing');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  // Устанавливаем размеры канваса
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Переменные для рисования
  let lineW = 5;
  let prevX = null;
  let prevY = null;
  let draw = false;

  // Начальные настройки
  ctx.lineWidth = lineW;
  ctx.strokeStyle = '#877177';

  // Функция для выбора цвета
  function setCurrentColor(color) {
    ctx.strokeStyle = color;
  }

  // Обработчики выбора цвета
  document
    .getElementById('seroe')
    .addEventListener('click', () => setCurrentColor('#877177'));
  document
    .getElementById('rozovoe')
    .addEventListener('click', () => setCurrentColor('#d37995'));
  document
    .getElementById('krasnoe')
    .addEventListener('click', () => setCurrentColor('#963b50'));
  document
    .getElementById('zelenoe')
    .addEventListener('click', () => setCurrentColor('#66a865'));

  // Кнопка очистки
  const clearBtn = document.querySelector('.musor');
  clearBtn.addEventListener('click', () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  );

  // Проверка, активен ли экран play3
  function isPlay3Active() {
    return document.querySelector('.play3').style.display === 'block';
  }

  // Обработчики событий мыши
  window.addEventListener('mousedown', (e) => {
    if (!isPlay3Active()) return; // Рисую только на экране play3

    const rect = canvas.getBoundingClientRect();
    prevX = e.clientX - rect.left;
    prevY = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    draw = true;
  });

  window.addEventListener('mouseup', () => {
    if (!isPlay3Active()) return; // Рисую только на экране play3

    draw = false;
    prevX = null;
    prevY = null;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPlay3Active() || !draw) return; // Рисую только на экране play3

    const rect = canvas.getBoundingClientRect();
    let currentX = e.clientX - rect.left;
    let currentY = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
  });
});

//
//
//
//
// ИГРА 4 ЕЕЕЕ ПОЧТИ КОНЕЦ
document.querySelector('.play4').style.display = 'none';
document.querySelector('.dver404svet').addEventListener('click', function () {
  document.querySelector('.glavsvet').style.display = 'none';
  document.querySelector('.play4').style.display = 'block';
});
document.querySelector('.strelka4').addEventListener('click', function () {
  document.querySelector('.play4').style.display = 'none';
  document.querySelector('.glavsvet').style.display = 'block';
  document.querySelector('.dver404svet').src = 'images/dver404temnota.svg';
});
//
//
//
//
document.addEventListener('DOMContentLoaded', function () {
  const banka = document.querySelector('.banka');
  if (!banka) {
    console.error('Элемент .banka не найден.');
    return;
  }

  const images = ['.ris1', '.ris2', '.ris3', '.ris4', '.ris5', '.ris6'];
  let currentIndex = 0;

  function showNextImage() {
    // Скрываем все рисунки
    images.forEach((img) => {
      const element = document.querySelector(img);
      if (element) {
        element.style.display = 'none';
      } else {
        console.error(`Элемент ${img} не найден.`);
      }
    });

    // Показываем текущий рисунок
    const currentImage = document.querySelector(images[currentIndex]);
    if (currentImage) {
      currentImage.style.display = 'block';
    }

    // Увеличиваем индекс или сбрасываем его, если достигнут конец массива
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Инициализация: скрываем все рисунки и показываем .ris0
  images.forEach((img) => {
    const element = document.querySelector(img);
    if (element) {
      element.style.display = 'none';
    }
  });
  const ris0 = document.querySelector('.ris0');
  if (ris0) {
    ris0.style.display = 'block';
  }

  // При каждом клике вызываем функцию для показа следующего рисунка
  banka.addEventListener('click', function () {
    if (currentIndex === 0) {
      // Если это первый клик, скрываем .ris0
      const ris0 = document.querySelector('.ris0');
      if (ris0) {
        ris0.style.display = 'none';
      }
    }
    showNextImage();
  });
});
//
// ❗️ ПЕРЕМЕЩЕНИЕ АНФИСА
$(document).ready(function () {
  $(
    '.anf1, .anf2, .anf3, .anf4, .anf5, .anf6, .anf7, .anf8, .anf9, .anf10 '
  ).draggable();
  $('.allisonplate').droppable({
    accept: '.draggable',
    drop: function (event, ui) {
      const dropZone = $(this);
      const offset = dropZone.offset();
      const width = dropZone.width();
      const height = dropZone.height();
      ui.helper.css({
        left: offset.left + (width - ui.helper.width()) / 2,
        top: offset.top + (height - ui.helper.height()) / 2,
      });
    },
  });
});
//
//
//
document.addEventListener('DOMContentLoaded', function () {
  const strelki = document.querySelectorAll(
    '.strelka1, .strelka2, .strelka3, .strelka4'
  );
  const gameDiv = document.querySelector('.game');
  // Создаем массив для отслеживания состояния стрелок
  const clickedStrelki = Array(strelki.length).fill(false);
  // Функция для проверки, находится ли пользователь на главном экране
  function isGlavSvetActive() {
    return document.querySelector('.glavsvet').style.display === 'block';
  }

  // Функция для проверки, все ли стрелки нажаты
  function checkStrelki() {
    if (clickedStrelki.every((clicked) => clicked)) {
      // Если все стрелки нажаты И пользователь на главном экране, показываем div game
      if (isGlavSvetActive()) {
        gameDiv.style.display = 'block';
      } else {
        gameDiv.style.display = 'none'; // Скрываем подвал, если не на главном экране
      }
    }
  }

  // Добавляем обработчики кликов на каждую стрелку
  strelki.forEach((strelka, index) => {
    strelka.addEventListener('click', function () {
      // Отмечаем, что стрелка была нажата
      clickedStrelki[index] = true;

      // Проверяем состояние всех стрелок
      checkStrelki();
    });
  });

  // Добавляем обработчик события, чтобы скрывать подвал при переходе на другие экраны
  document.addEventListener('click', function (e) {
    if (!isGlavSvetActive()) {
      gameDiv.style.display = 'none';
    }
  });
});

//
//
//
// КОНФИТТИ, это если что библиотека
document.addEventListener('DOMContentLoaded', function () {
  const strelki = document.querySelectorAll(
    '.strelka1, .strelka2, .strelka3, .strelka4'
  );
  const glavSvetDiv = document.querySelector('.glavsvet');
  const clickedStrelki = Array(strelki.length).fill(false);
  function checkStrelki() {
    if (clickedStrelki.every((clicked) => clicked)) {
      activateConfetti(glavSvetDiv);
    }
  }
  strelki.forEach((strelka, index) => {
    strelka.addEventListener('click', function () {
      clickedStrelki[index] = true;
      checkStrelki();
    });
  });
  function activateConfetti(targetElement) {
    targetElement.addEventListener('click', handleConfettiClick);
  }
  function handleConfettiClick(event) {
    party.confetti(event, {
      count: party.variation.range(50, 100), // Количество частиц
      spread: 90, // Распространение (угол разброса)
      size: party.variation.range(0.5, 1), // Размер частиц
      speed: party.variation.range(200, 600), // Скорость падения
    });
  }
});
//
// МЯЯУ ПОДВАЛ 🤪
// Обработчик клика на .surprise
document.addEventListener('DOMContentLoaded', () => {
  const surprise = document.querySelector('.surprise');
  const game = document.querySelector('.game');
  surprise.addEventListener('click', () => {
    surprise.style.display = 'none';
    game.style.display = 'block';
  });
});
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', () => {
  const klava = document.getElementById('klava');
  const obstacles = [
    document.getElementById('obstacle-type1'),
    document.getElementById('obstacle-type2'),
    document.getElementById('obstacle-type3'),
    document.getElementById('obstacle-type4'),
  ];

  let isJumping = false;
  let currentObstacleIndex = 0;

  // Функция для прыжка
  function jump() {
    if (isJumping) return;
    isJumping = true;

    let jumpHeight = 0;
    const maxJump = 100; // Максимальная высота прыжка
    const jumpSpeed = 5; // Скорость прыжка

    const upInterval = setInterval(() => {
      if (jumpHeight >= maxJump) {
        clearInterval(upInterval);

        const downInterval = setInterval(() => {
          if (jumpHeight <= 0) {
            clearInterval(downInterval);
            isJumping = false;
          }
          jumpHeight -= jumpSpeed;
          klava.style.top = `${9.5 - jumpHeight / 10}vw`;
        }, 20);
      }
      jumpHeight += jumpSpeed;
      klava.style.top = `${9.5 - jumpHeight / 10}vw`;
    }, 20);
  }

  // Устанавливаем начальную позицию
  let position = 72; // Начальная позиция в vw

  // Функция для анимации препятствий
  function moveObstacle() {
    // Уменьшаем позицию (движение влево)
    position -= 0.8; // Скорость движения

    // Обновляем CSS-свойство left для текущего препятствия
    obstacles[currentObstacleIndex].style.left = `${position}vw`;

    // Проверяем, не вышло ли препятствие за пределы экрана
    if (position <= 0.2) {
      // Скрываем текущее препятствие
      obstacles[currentObstacleIndex].style.display = 'none';

      // Переходим к следующему препятствию
      currentObstacleIndex = (currentObstacleIndex + 1) % obstacles.length;

      // Показываем следующее препятствие
      obstacles[currentObstacleIndex].style.display = 'block';
      obstacles[currentObstacleIndex].style.left = '72vw'; // Начальная позиция

      // Сбрасываем позицию для нового препятствия
      position = 72;
    }

    // Продолжаем анимацию
    requestAnimationFrame(moveObstacle);
  }

  // Запуск событий
  klava.addEventListener('click', jump);
  moveObstacle();
});
//
//
//
//
//
//
//
//
//
// document.addEventListener('DOMContentLoaded', () => {
//   const klava = document.getElementById('klava');
//   const obstacles = [
//     document.getElementById('obstacle-type1'),
//     document.getElementById('obstacle-type2'),
//     document.getElementById('obstacle-type3'),
//     document.getElementById('obstacle-type4'),
//   ];

//   let isJumping = false;
//   let currentObstacleIndex = 0;

//   // Функция для прыжка
//   function jump() {
//     if (isJumping) return;
//     isJumping = true;

//     let jumpHeight = 0;
//     const maxJump = 100; // Максимальная высота прыжка
//     const jumpSpeed = 5; // Скорость прыжка

//     const upInterval = setInterval(() => {
//       if (jumpHeight >= maxJump) {
//         clearInterval(upInterval);

//         const downInterval = setInterval(() => {
//           if (jumpHeight <= 0) {
//             clearInterval(downInterval);
//             isJumping = false;
//           }
//           jumpHeight -= jumpSpeed;
//           klava.style.top = `${9.5 - jumpHeight / 10}vw`;
//         }, 20);
//       }
//       jumpHeight += jumpSpeed;
//       klava.style.top = `${9.5 - jumpHeight / 10}vw`;
//     }, 20);
//   }
//   // ТАААААК тут про препятсвия
//   // Получаем элемент препятствия
//   const obstacle = document.getElementById('obstacle-type1');

//   // Устанавливаем начальную позицию
//   let position = 72; // 100vw

//   // Функция для анимации
//   function moveObstacle() {
//     // Уменьшаем позицию (движение влево)
//     position -= 0.8; // Скорость движения

//     // Обновляем CSS-свойство left
//     obstacle.style.left = `${position}vw`;

//     // Проверяем, не вышло ли препятствие за пределы экрана
//     if (position > 0.3) {
//       // Если нет, продолжаем анимацию
//       requestAnimationFrame(moveObstacle);
//     } else {
//       // Если вышло, сбрасываем позицию для повторения
//       position = 72;
//       requestAnimationFrame(moveObstacle);
//     }
//   }

//   // Запуск событий
//   klava.addEventListener('click', jump);
//   moveObstacle();
// });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// КУРАТОРЫ, СПАСИБО ВАМ БОЛЬШОЕ ЗА ЭТОТ МОДУЛЬ ! ВЫ СУПЕР! 🥰❤️
// я выжила почти
