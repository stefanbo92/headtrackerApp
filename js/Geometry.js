function import_background() {
    var textures = {background_texture:0};
    var materials = {background:0};
    var meshes = {background:0};

    textures.background_texture = new THREE.ImageUtils.loadTexture("img/background.jpg");

    textures.background_texture.repeat.set( 1, 1 );
    materials.background = new THREE.MeshLambertMaterial({ map : textures.background_texture });
    meshes.background = new THREE.Mesh(new THREE.PlaneGeometry(2000, 1200), materials.background);
    meshes.background.material.side = THREE.DoubleSide;
    meshes.background.position.set(0,0,-300);
    scene.add(meshes.background);
}

function import_room() {
    var textures = {};
    var materials = {};
    var meshes = {};
    var roomSize=100;
    
    //load texture
    textures.background_texture = new THREE.ImageUtils.loadTexture("img/wall.jpg");
    textures.background_texture.repeat.set( 1, 1 );
    materials.background = new THREE.MeshLambertMaterial({ map : textures.background_texture });

    //front wall
    meshes.background = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), materials.background);
    meshes.background.material.side = THREE.DoubleSide;
    meshes.background.position.set(0,0,-roomSize);
    scene.add(meshes.background);
    //left wall
    meshes.background2 = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), materials.background);
    meshes.background2.material.side = THREE.DoubleSide;
    meshes.background2.position.set(-roomSize/2,0,-roomSize/2);
    meshes.background2.rotation.set(0,Math.PI/2,0);
    scene.add(meshes.background2);
    //right wall
    meshes.background3 = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), materials.background);
    meshes.background3.material.side = THREE.DoubleSide;
    meshes.background3.position.set(roomSize/2,0,-roomSize/2);
    meshes.background3.rotation.set(0,-Math.PI/2,0);
    scene.add(meshes.background3);
    //top wall
    meshes.background4 = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), materials.background);
    meshes.background4.material.side = THREE.DoubleSide;
    meshes.background4.position.set(0,roomSize/2,-roomSize/2);
    meshes.background4.rotation.set(Math.PI/2,0,0);
    scene.add(meshes.background4);
    //bottom wall
    meshes.background5 = new THREE.Mesh(new THREE.PlaneGeometry(roomSize, roomSize), materials.background);
    meshes.background5.material.side = THREE.DoubleSide;
    meshes.background5.position.set(0,-roomSize/2,-roomSize/2);
    meshes.background5.rotation.set(Math.PI/2,0,0);
    scene.add(meshes.background5);

}


function import_objects() {
    var texture = new THREE.ImageUtils.loadTexture('img/metal.jpg');

    var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    var cube1 = new THREE.Mesh( geometry, material );
    cube1.position.set(5,5,-10);
    scene.add( cube1 );

    var cube2 = new THREE.Mesh( geometry, material );
    cube2.position.set(-5,-5,-10);
    scene.add( cube2 );
}
