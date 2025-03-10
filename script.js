// import * as THREE from 'three';
// import { OrbitControls } from 'OrbitControls';
// import { GLTFLoader } from 'GLTFLoader';

// document.addEventListener('DOMContentLoaded', () => {
//   initThree();
// });

// function initThree() {
//   const container = document.querySelector('.zagruzka'); // Контейнер для 3D
//   const width = container.clientWidth;
//   const height = container.clientHeight;
//   // Создаем сцену
//   const scene = new THREE.Scene();
//   // scene.background = new THREE.Color(0xffffff); // Белый фон
//   // scene.background = new THREE.Color(0x000000); // Белый фон

//   // Камера
//   const camera = new THREE.PerspectiveCamera(
//     8,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     100
//   );
//   camera.position.set(100, 2, 6);

//   // Рендерер
//   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.shadowMap.enabled = true;
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//   renderer.setClearColor(0x000000, 0);
//   document.body.appendChild(renderer.domElement);
//   document.body.appendChild(renderer.zagruzka);
//   document.body.appendChild(renderer.play2);

//   // Управление камерой
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//   controls.dampingFactor = 0.05;
//   controls.maxDistance = 10;
//   controls.maxPolarAngle = Math.PI / 2.2;

//   // --- Освещение ---
//   const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
//   scene.add(ambientLight);

//   const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
//   dirLight.position.set(3, 6, 5);
//   dirLight.castShadow = true;
//   dirLight.shadow.mapSize.width = 2048;
//   dirLight.shadow.mapSize.height = 2048;
//   dirLight.shadow.radius = 4;
//   scene.add(dirLight);

//   const fillLight = new THREE.DirectionalLight(0xffe0bd, 1.5);
//   fillLight.position.set(-3, 4, -2);
//   scene.add(fillLight);

//   const backLight = new THREE.PointLight(0xffe0bd, 1.2, 10);
//   backLight.position.set(0, 3, -3);
//   scene.add(backLight);

//   // Пол (принимает тени)
//   const groundGeometry = new THREE.PlaneGeometry(10, 10);
//   const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.15 });
//   const ground = new THREE.Mesh(groundGeometry, groundMaterial);
//   ground.rotation.x = -Math.PI / 2;
//   ground.receiveShadow = true;
//   scene.add(ground);

//   // Загрузка 3D-модели
//   const loader = new GLTFLoader();
//   loader.load(
//     './3d/result.gltf',
//     (gltf) => {
//       const model = gltf.scene;
//       model.traverse((node) => {
//         if (node.isMesh) {
//           node.material.roughness = 0.6; // Матовость
//           node.material.metalness = 0.05; // Уменьшаем отражения
//           node.material.envMapIntensity = 2; // Подчеркиваем объем
//         }
//       });
//       scene.add(model);
//     },
//     undefined,
//     (error) => {
//       console.error('Ошибка загрузки модели:', error);
//     }
//   );

//   // Анимация
//   function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
//   }
//   animate();

//   // Адаптация под размер экрана
//   window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//   });
// }
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
// ПЕРЕМЕЩЕНИЕ ПРЕДМЕТОВ В ЯЩИКАХ
function makeDraggable(element) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // При нажатии на элемент (начало перетаскивания)
  element.addEventListener('mousedown', function (e) {
    isDragging = true;
    // Запоминаем позицию, где был клик мыши
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;

    // Убираем текстовое выделение
    element.style.userSelect = 'none';

    // При движении мыши перетаскиваем элемент
    document.addEventListener('mousemove', onMouseMove);

    // Отключаем события мыши после отпускания кнопки
    document.addEventListener('mouseup', onMouseUp);
  });

  // Функция, которая будет вызываться при движении мыши
  function onMouseMove(e) {
    if (isDragging) {
      // Рассчитываем новые координаты для перемещения элемента
      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      // Перемещаем элемент в зависимости от положения мыши
      element.style.left = `${newX}px`;
      element.style.top = `${newY}px`;
    }
  }

  // Завершаем перетаскивание
  function onMouseUp() {
    if (isDragging) {
      isDragging = false;

      // Разрешаем выделение текста
      element.style.userSelect = '';

      // Убираем обработчики событий, так как перетаскивание завершено
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }
}

// Применяем функцию ко всем элементам с классом .draggable
const draggableItems = document.querySelectorAll('.draggable');
draggableItems.forEach((item) => {
  makeDraggable(item);
});
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
