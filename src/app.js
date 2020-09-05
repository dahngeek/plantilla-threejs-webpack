import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


var camera, scene, renderer, stats;
var geometry, material, mesh;
var grid = [];
var controls;



init();
animate();

function init() {
	var container = document.getElementById( 'container' );

	// Canvas
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	// Stats
	stats = new Stats();
	container.appendChild( stats.dom );

	// Camara
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 100 );
	camera.position.set( 0, 1.4, 4 );
	controls = new OrbitControls( camera, container );
	controls.target.set( 0, 0.5, 0 );
	controls.update();

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	grid = new THREE.GridHelper( 100, 40, 0xFF0000, 0xFFFFFF );
	grid.material.opacity = 0.4;
	grid.material.depthWrite = false;
	grid.material.transparent = true;
	scene.add( grid );

}

function animate() {
	var time = - performance.now() / 1000;
	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	grid.position.z = - ( time ) * 2 % 10;

	stats.update();

	renderer.render( scene, camera );

}