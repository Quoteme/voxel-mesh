import * as THREE from './lib/three.module.js';

export { culled } from './mesher/culled.mjs'
export { greedy } from './mesher/greedy.mjs'
export { monotone } from './mesher/monotone.mjs'
export { stupid } from './mesher/stupid.mjs'
// export {
// 	voxToGeometry
// }

// // voxToGeometry :: [[[Bool]]] -> ([[Int]] -> Mesh) -> Geometry
// function voxToGeometry(vox, mesher=MESHER.stupid){
// 	// create vertices and faces
// 	let data = mesher(
// 		vox.flat(2),
// 		[vox[0][0].length, vox[0].length, vox.length]
// 	)
// 	// create THREE.JS mesh
// 	let geometry = new THREE.Geometry();
// 	data.vertices.forEach(e => geometry.vertices.push(
// 		new THREE.Vector3(...e)
// 	))
// 	data.faces.forEach(e =>{
// 		let f = [
// 			new THREE.Face3(e[2],e[3],e[0]),
// 			new THREE.Face3(e[1],e[2],e[0]),
// 		]
// 		geometry.faces.push(...f)
// 		geometry.faceVertexUvs[ 0 ].push(
// 			[
// 				new THREE.Vector2( 1, 1 ),
// 				new THREE.Vector2( 0, 1 ),
// 				new THREE.Vector2( 0, 0 ),
// 			],
// 			[
// 				new THREE.Vector2( 1, 0 ),
// 				new THREE.Vector2( 1, 1 ),
// 				new THREE.Vector2( 0, 0 ),
// 			]
// 		);
// 	})
// 	geometry.computeFaceNormals();
// 	geometry.verticesNeedUpdate = true;
// 	geometry.elementsNeedUpdate = true;
// 	geometry.normalsNeedUpdate = true;
// 	geometry.computeBoundingBox();
// 	geometry.computeBoundingSphere();
// 	return geometry
// }
