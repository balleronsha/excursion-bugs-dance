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
// Функция для перемещения iphone
function makeDraggableIphone() {
  const iphone = document.querySelector('.iphone');
  let isDragging = false;
  let offsetX, offsetY;

  iphone.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - iphone.offsetLeft;
    offsetY = e.clientY - iphone.offsetTop;
    iphone.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      iphone.style.left = `${left}px`;
      iphone.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    iphone.style.zIndex = '';
  });
}

// Функция для перемещения naush
function makeDraggableNaush() {
  const naush = document.querySelector('.naush');
  let isDragging = false;
  let offsetX, offsetY;

  naush.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - naush.offsetLeft;
    offsetY = e.clientY - naush.offsetTop;
    naush.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      naush.style.left = `${left}px`;
      naush.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    naush.style.zIndex = '';
  });
}

// Функция для перемещения getri
function makeDraggableGetri() {
  const getri = document.querySelector('.getri');
  let isDragging = false;
  let offsetX, offsetY;

  getri.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - getri.offsetLeft;
    offsetY = e.clientY - getri.offsetTop;
    getri.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      getri.style.left = `${left}px`;
      getri.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    getri.style.zIndex = '';
  });
}

// Функция для перемещения points
function makeDraggablePoints() {
  const points = document.querySelector('.points');
  let isDragging = false;
  let offsetX, offsetY;

  points.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - points.offsetLeft;
    offsetY = e.clientY - points.offsetTop;
    points.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      points.style.left = `${left}px`;
      points.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    points.style.zIndex = '';
  });
}

// Функция для перемещения giri
function makeDraggableGiri() {
  const giri = document.querySelector('.giri');
  let isDragging = false;
  let offsetX, offsetY;

  giri.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - giri.offsetLeft;
    offsetY = e.clientY - giri.offsetTop;
    giri.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      giri.style.left = `${left}px`;
      giri.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    giri.style.zIndex = '';
  });
}

// Функция для перемещения roll
function makeDraggableRoll() {
  const roll = document.querySelector('.roll');
  let isDragging = false;
  let offsetX, offsetY;

  roll.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - roll.offsetLeft;
    offsetY = e.clientY - roll.offsetTop;
    roll.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      roll.style.left = `${left}px`;
      roll.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    roll.style.zIndex = '';
  });
}

// Функция для перемещения stanley
function makeDraggableStanley() {
  const stanley = document.querySelector('.stanley');
  let isDragging = false;
  let offsetX, offsetY;

  stanley.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - stanley.offsetLeft;
    offsetY = e.clientY - stanley.offsetTop;
    stanley.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      stanley.style.left = `${left}px`;
      stanley.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    stanley.style.zIndex = '';
  });
}

// Функция для перемещения bag
function makeDraggableBag() {
  const bag = document.querySelector('.bag');
  let isDragging = false;
  let offsetX, offsetY;

  bag.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - bag.offsetLeft;
    offsetY = e.clientY - bag.offsetTop;
    bag.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      bag.style.left = `${left}px`;
      bag.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    bag.style.zIndex = '';
  });
}

// Функция для перемещения flowers
function makeDraggableFlowers() {
  const flowers = document.querySelector('.flowers');
  let isDragging = false;
  let offsetX, offsetY;

  flowers.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - flowers.offsetLeft;
    offsetY = e.clientY - flowers.offsetTop;
    flowers.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      flowers.style.left = `${left}px`;
      flowers.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    flowers.style.zIndex = '';
  });
}

// Функция для перемещения instax
function makeDraggableInstax() {
  const instax = document.querySelector('.instax');
  let isDragging = false;
  let offsetX, offsetY;

  instax.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - instax.offsetLeft;
    offsetY = e.clientY - instax.offsetTop;
    instax.style.zIndex = 1000;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const left = e.clientX - offsetX;
      const top = e.clientY - offsetY;
      instax.style.left = `${left}px`;
      instax.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    instax.style.zIndex = '';
  });
}

// Вызов всех функций для каждого предмета
makeDraggableIphone();
makeDraggableNaush();
makeDraggableGetri();
makeDraggablePoints();
makeDraggableGiri();
makeDraggableRoll();
makeDraggableStanley();
makeDraggableBag();
makeDraggableFlowers();
makeDraggableInstax();
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
