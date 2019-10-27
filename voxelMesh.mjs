import * as THREE from './lib/three.module.js';
import { stupid } from './mesher/stupid.mjs'

export { culled } from './mesher/culled.mjs'
export { greedy } from './mesher/greedy.mjs'
export { monotone } from './mesher/monotone.mjs'
export { stupid } from './mesher/stupid.mjs'
export {
	voxToGeometry,
	multiMaterial
}

const crossProd = (v,w) => [
	v[1]*w[2]-v[2]*w[1],
	v[2]*w[0]-v[0]*w[2],
	v[0]*w[1]-v[1]*w[0],
]

// voxToGeometry :: [[[Bool]]] -> ([[Int]] -> Mesh) -> Geometry
function voxToGeometry(vox, mesher=stupid){
	// create vertices and faces
	let data = mesher(
		vox.flat(2),
		[vox[0][0].length, vox[0].length, vox.length]
	)
	// create THREE.JS mesh
	let geometry = new THREE.Geometry();
	data.vertices.forEach(e => geometry.vertices.push(
		new THREE.Vector3(...e)
	))
	data.faces.forEach((e,i) =>{
		// find orthodognal vector to this face
		// let v = data.vertices[e[0]]
		let f = [
			new THREE.Face3(e[2],e[3],e[0]),
			new THREE.Face3(e[1],e[2],e[0]),
		]
		geometry.faces.push(...f)
		geometry.faceVertexUvs[ 0 ].push(
			[
				new THREE.Vector2( 1, 1 ),
				new THREE.Vector2( 0, 1 ),
				new THREE.Vector2( 0, 0 ),
			],
			[
				new THREE.Vector2( 1, 0 ),
				new THREE.Vector2( 1, 1 ),
				new THREE.Vector2( 0, 0 ),
			]
		);
	})
	geometry.verticesNeedUpdate = true;
	geometry.elementsNeedUpdate = true;
	geometry.normalsNeedUpdate = true;
	geometry.computeBoundingBox();
	geometry.computeBoundingSphere();
	return geometry
}

// allows multiple materials to be used for
//		right, left, up, down, back, front
// by passing in an array of materials
function multiMaterial(geometry){
	geometry.computeFaceNormals();
	geometry.faces.forEach((e,i) =>{
		if (e.normal.x == 1)
			e.materialIndex = 0;
		else if(e.normal.x == -1)
			e.materialIndex = 1;
		else if(e.normal.y == 1)
			e.materialIndex = 2;
		else if(e.normal.y == -1)
			e.materialIndex = 3;
		else if(e.normal.z == 1)
			e.materialIndex = 4;
		else if(e.normal.z == -1)
			e.materialIndex = 5;

	})
	return geometry;
}
