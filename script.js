import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';

document.addEventListener('DOMContentLoaded', () => {
  initThree('.zagruzka', { position: [0, 1, 3], scale: [1, 1, 1] });
  initThree('.play2', { position: [0, 0, 5], scale: [1.5, 1.5, 1.5] });
});

function initThree(selector, options) {
  const container = document.querySelector(selector);
  if (!container) return;

  // Получаем реальные размеры контейнера
  const { width, height } = container.getBoundingClientRect();

  // Создаем сцену
  const scene = new THREE.Scene();

  // Камера
  const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
  camera.position.set(...options.position);

  // Рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000, 0); // Прозрачный фон
  container.appendChild(renderer.domElement);

  // Управление камерой
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxDistance = 10;
  controls.maxPolarAngle = Math.PI / 2.2;

  // Освещение
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(3, 6, 5);
  dirLight.castShadow = true;
  scene.add(dirLight);

  // Загрузка 3D-модели
  const loader = new GLTFLoader();
  loader.load(
    './3d/result.gltf',
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(...options.scale);
      model.position.set(0, 0, 0);
      scene.add(model);
    },
    undefined,
    (error) => console.error('Ошибка загрузки модели:', error)
  );

  // Анимация
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Адаптация под размер контейнера
  window.addEventListener('resize', () => {
    const { width, height } = container.getBoundingClientRect();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}
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
// ЭТО ТЕКСТ ЗАГРУЗКИ

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
