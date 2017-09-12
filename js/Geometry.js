/**
 * Created by nur20 on 30.04.2017.
 */


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


function import_object() {
    var texture = new THREE.ImageUtils.loadTexture('img/metal.jpg');

    var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    var cube1 = new THREE.Mesh( geometry, material );
    cube1.position.set(5,5,-10);

    scene.add( cube1 );
}
