// Escena 
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
//creacion del corazon 
function crearCorazon() {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.5);
    shape.bezierCurveTo(0.5, -1, 1, 0, 0, 0.5);
    shape.bezierCurveTo(-1, 0, -0.5, -1, 0, -0.5);
    return shape;
}
const extrudeSettings = { depth: 0.2, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.02 };
const geometria = new THREE.ExtrudeGeometry(crearCorazon(), extrudeSettings);
const material = new THREE.MeshBasicMaterial({ color: 0x800080, wireframe: true });
const corazon = new THREE.Mesh(geometria, material);
escena.add(corazon)
// Posicionar de  la cámara
camara.position.z = 2;
// Animación del corazón
function animacion() {
    requestAnimationFrame(animacion);
    corazon.rotation.x += 0.01;
    corazon.rotation.y += 0.01;
    renderizador.render(escena, camara);
}
animacion();
// Ajustes del tamano
window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});