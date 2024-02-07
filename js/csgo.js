const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

const loader = new THREE.LegacyJSONLoader();
loader.load(
	// resource URL
	"http://localhost/source/models/knife_bayo/model.json",

	// onLoad callback
	function ( geometry ) {
		const material = new THREE.MeshBasicMaterial( { color: 0xff0000  } );
		const object = new THREE.Mesh( geometry, material );
		scene.add( object );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);

renderer.render( scene, camera );