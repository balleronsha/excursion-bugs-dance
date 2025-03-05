import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import { GLTFLoader } from 'GLTFLoader';
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib';

document.addEventListener('DOMContentLoaded', () => {
  initThree();
});
function initThree() {
  let model = document.querySelector('.model');
  let scene = new THREE.Scene();
  scene.background = new THREE.Color('#ffe4e4');
  scene.position.set(0, -30, 0);
  let camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );
  camera.position.set(-130, 80, 50);
  const renderer = new THREE.WebGLRenderer({ antialials: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  model.appendChild(renderer.domElement);

  {
    const loader = new GLTFLoader();
    loader.load(
      './3d/result.gltf',
      (gltf) => {
        scene.add(gltf.scene);
      },
      (error) => {
        console.log('Error:' + error);
      }
    );
  }
  // настраиваем свет
  {
    const light = new THREE.AmbientLight(0xeeeeee);
    scene.add(light);
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1);
    const helper = new THREE.DirectionalLight(light, 5);
    scene.add(light);
  }
  // controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enabledDamping = true;
  controls.maxDistance = 300;
  controls.maxPolarAngle = Math.PI / 2.2;
  // controls.autoRotate = true;
  // animation
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

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
