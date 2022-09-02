import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  antialias: true
});
renderer.outputEncoding = THREE.sRGBEncoding;

let camera = new THREE.PerspectiveCamera(20, 1);
camera.position.set(0, 0.9, 7);

scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffffff, 12);
scene.add(light);

let loader = new GLTFLoader();
loader.load('spiderman/scene.gltf', (gltf) => {
  scene.add(gltf.scene);

  function animate() {
    requestAnimationFrame(animate)
    gltf.scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
});

