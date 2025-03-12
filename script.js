window.onload = function () {
  // После загрузки всего контента, скрыть экран загрузки
  document.querySelector('.zagruzka').style.display = 'none';
};
//
//
//
//
//
// 3D
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
  // scene.background = new THREE.Color(0xffffff); // Белый фон
  // scene.background = new THREE.Color(0x000000); // Белый фон

  // Камера
  const camera = new THREE.PerspectiveCamera(
    8,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(100, 2, 6);

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
  dirLight.position.set(3, 6, 5);
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
        }
      });
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

document.querySelector('.iconklava1').addEventListener('click', function () {
  // Показать элементы rech1 и r1
  document.querySelector('.rech1').style.display = 'block';
  document.querySelector('.r1').style.display = 'block';
});
//
//
//
document.querySelector('.iconklava2').addEventListener('click', function () {
  // Показать элементы rech1 и r1
  document.querySelector('.rech2').style.display = 'block';
  document.querySelector('.r2').style.display = 'block';
});
//
// 🤪 ЙОУ ПЕРЕХОД 1
document.querySelector('.play1').style.display = 'none';
document.querySelector('.shkafsvet').addEventListener('click', function () {
  // Скрыть главный экран
  document.querySelector('.glavsvet').style.display = 'none';

  // Показать экран play1
  document.querySelector('.play1').style.display = 'block';
});
document.querySelector('.strelka1').addEventListener('click', function () {
  // Скрыть экран play1
  document.querySelector('.play1').style.display = 'none';

  // Показать главный экран
  document.querySelector('.glavsvet').style.display = 'block';
});
//
//
//
// ИГРА 1 СО ШКАФЧИКАМИ
// УДАЛЕНИЕ ДВЕРЕЙ
document.querySelector('.dver1').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver1
});

document.querySelector('.dver3').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver3
});

document.querySelector('.dver4').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver4
});

document.querySelector('.dver5').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver5
});

document.querySelector('.dver6').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver6
});

document.querySelector('.dver7').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver7
});

document.querySelector('.dver8').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver8
});

document.querySelector('.dver9').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver9
});

document.querySelector('.dver10').addEventListener('click', function () {
  this.style.display = 'none'; // Скрыть dver10
});
// ❗️ ПЕРЕМЕЩЕНИЕ ПРЕДМЕТОВ В ЯЩИКАХ
$(document).ready(function () {
  // Делаем предметы перетаскиваемыми
  $(
    '.iphone, .naush, .getri, .points, .giri, .roll, .stanley, .bag, .flowers, .instax'
  ).draggable();

  // Делаем элемент с классом .allisonplate зоной для сброса
  $('.allisonplate').droppable({
    accept: '.draggable', // Только перетаскиваемые предметы могут быть сброшены в эту зону
    drop: function (event, ui) {
      // При сбросе предмета меняем его позицию на центр дроп-зоны
      const dropZone = $(this);
      const offset = dropZone.offset();
      const width = dropZone.width();
      const height = dropZone.height();

      // Рассчитываем новую позицию для элемента
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
//
// рисовашка
// Получаем элемент <canvas> из DOM по его ID
const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d', { willReadFrequently: true });

// Устанавливаем высоту и ширину канваса равными размерам окна браузера
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Переменные для хранения текущего цвета, толщины линии и состояния рисования
var lineW = 5; // Толщина линии (по умолчанию 5px)
let prevX = null; // Предыдущие координаты X мыши
let prevY = null; // Предыдущие координаты Y мыши
let draw = false; // Флаг, указывающий, происходит ли рисование в данный момент

// Устанавливаем начальную толщину линии
ctx.lineWidth = lineW;
ctx.strokeStyle = '#877177'; // Начальный цвет линии

// Получаем все элементы с классом "clr" (кнопки выбора цвета)
let clrs = document.querySelectorAll('.clr');

// Преобразуем NodeList в массив для удобства работы
clrs = Array.from(clrs);

// Для каждой кнопки цвета добавляем обработчик клика
// Обработчики для выбора цветов
document.getElementById('seroe').addEventListener('click', () => {
  const currentColor = '#877177';
  ctx.strokeStyle = currentColor;
  console.log(`Цвет изменен на: ${currentColor}`);
});

document.getElementById('rozovoe').addEventListener('click', () => {
  const currentColor = '#d37995';
  ctx.strokeStyle = currentColor;
  console.log(`Цвет изменен на: ${currentColor}`);
});

document.getElementById('krasnoe').addEventListener('click', () => {
  const currentColor = '#963b50';
  ctx.strokeStyle = currentColor;
  console.log(`Цвет изменен на: ${currentColor}`);
});

document.getElementById('zelenoe').addEventListener('click', () => {
  const currentColor = '#66a865';
  ctx.strokeStyle = currentColor;
  console.log(`Цвет изменен на: ${currentColor}`);
});
// Находим кнопку очистки канваса
let clearBtn = document.querySelector('.musor');

// Добавляем обработчик клика для очистки канваса
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем весь канвас
});

// Добавляем обработчик события "mousedown" для начала рисования
window.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  prevX = e.clientX - rect.left; // Сохраняем начальные координаты X
  prevY = e.clientY - rect.top; // Сохраняем начальные координаты Y
  draw = true;
});

// Добавляем обработчик события "mouseup" для завершения рисования
window.addEventListener('mouseup', () => {
  draw = false;
  prevX = null; // Сбрасываем предыдущие координаты после завершения рисования
  prevY = null;
});

// Добавляем обработчик события "mousemove" для рисования линий
window.addEventListener('mousemove', (e) => {
  if (!draw) return; // Если рисование не активно, выходим

  const rect = canvas.getBoundingClientRect();
  let currentX = e.clientX - rect.left; // Текущие координаты X
  let currentY = e.clientY - rect.top; // Текущие координаты Y

  // Начинаем новый путь для рисования
  ctx.beginPath();
  ctx.moveTo(prevX, prevY); // Перемещаемся к предыдущей точке
  ctx.lineTo(currentX, currentY); // Рисуем линию до текущей точки
  ctx.stroke(); // Применяем рисование

  // Обновляем предыдущие координаты
  prevX = currentX;
  prevY = currentY;
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

// const klava = document.getElementById('klava');
// const kamen = document.getElementById('kamen');
// let scoreDisplay = document.createElement('div');
// document.body.appendChild(scoreDisplay);
// scoreDisplay.id = 'score';
// scoreDisplay.innerText = 'Счёт: 0';

// let isJumping = false;
// let score = 0;

// // Функция прыжка
// function jump() {
//   if (!isJumping) {
//     isJumping = true;
//     klava.classList.add('jump');

//     setTimeout(() => {
//       klava.classList.remove('jump');
//       isJumping = false;
//     }, 500);
//   }
// }

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'Space') {
//     jump();
//   }
// });

// // Проверка столкновения (ТОЛЬКО когда KLAVA и KAMEN пересекаются)
// setInterval(() => {
//   let klavaTop = parseInt(
//     window.getComputedStyle(klava).getPropertyValue('top')
//   );
//   let kamenLeft = parseInt(
//     window.getComputedStyle(kamen).getPropertyValue('left')
//   );

//   // Если камень в зоне Klava и Klava на земле - GAME OVER
//   if (kamenLeft > 10 && kamenLeft < 35 && klavaTop >= 8) {
//     alert(`GAME OVER!! Ваш счёт: ${score}`);
//     score = 0; // Обнуление счёта
//     scoreDisplay.innerText = `Счёт: ${score}`;
//   }
// }, 50);
