var BG=function(){var n,t,r;function i(){}function u(){}return{init:function(){events.on("update",i),events.on("onBeat",u),n=new THREE.Object3D,VizHandler.getScene().add(n),cubeMap=Assets.getCubeMap(23),(r=THREE.ShaderLib.cube).uniforms.tCube.value=cubeMap;var e=new THREE.ShaderMaterial({fragmentShader:r.fragmentShader,vertexShader:r.vertexShader,uniforms:r.uniforms,depthWrite:!0,side:THREE.BackSide});new THREE.Mesh(new THREE.CubeGeometry(1500,1500,1500),e),cubeMaterial=new THREE.MeshStandardMaterial({shading:THREE.FlatShading}),(t=new THREE.Mesh(new THREE.PlaneGeometry(10,10),cubeMaterial)).rotation.x=-Math.PI/2,t.position.y=-.25,t.castShadow=!0,t.receiveShadow=!0,n.add(t);var a=new THREE.Mesh(new THREE.CubeGeometry(.2,.2,.2),cubeMaterial);a.castShadow=!0,a.receiveShadow=!0},update:i,onBeat:u,setEnvMap:function(e){r.uniforms.tCube.value=e}}}();
//# sourceMappingURL=BG.js.map
