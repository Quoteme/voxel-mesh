Generate a THREE.JS mesh from voxel data.
Also supports the use of textures.

WEBGL DEMO : [http://mikolalysenko.github.com/MinecraftMeshes2/](http://mikolalysenko.github.com/MinecraftMeshes2/)

```bash
git submodule add https://github.com/quoteme/voxel-mesh/ lib/voxel-mesh/
```

```javascript
import * as MESHER from 'lib/voxel-mesh/voxelMesh.mjs'

// the .voxels when written as a 6 digit number,
// will be interpreted as RRGGBB
let voxData = {"voxels":{"0":255,"1":255,"2":255,"3":255,"4":255,"5":255,"6":255,"7":255,"8":255,"9":255,"10":255,"11":255,"12":255,"13":255,"14":255,"15":255,"16":255,"17":255,"18":255,"19":255,"20":255,"21":255,"22":255,"23":255,"24":255,"25":255,"26":255,"27":255,"28":255,"29":255,"30":255,"31":255,"32":255,"33":255,"34":255,"35":255,"36":255,"37":255,"38":255,"39":255,"40":255,"41":255,"42":255,"43":255,"44":255,"45":255,"46":255,"47":255,"48":255,"49":255,"50":255,"51":255,"52":255,"53":255,"54":255,"55":255,"56":255,"57":255,"58":255,"59":255,"60":255,"61":255,"62":255,"63":255},"dims":[4,4,4]}

let geometry = MESHER.monotone(voxData.voxel, voxData.dims);
```

To use a texture/three.js material on this geometry:
```javascript
// overwrite old geometry with one that has UVs calculated
let geometry = MESHER.multiMaterial( geometry );

var texture = new THREE.TextureLoader().load( 'textures/crate.gif' );

let material = new THREE.MeshLambertMaterial({
	map: texture
})

let mesh = new THREE.Mesh( geometry, material );
```
