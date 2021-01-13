let scene, camera, renderer;
let mesh1, mesh2, mesh3;
let particleCount, particles, material

init();
animate();

// initialize scene
function init() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({
        antialias:true
    });

    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    renderer.setClearColor(0xaed4af, 1);

    document.body.appendChild(renderer.domElement);

    // Create a camera and position it in the scene
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20000);
    camera.position.set(500, 500, 500);
    scene.add(camera);

    // Create a directional light
    const light = new THREE.DirectionalLight(0xffffff, 2.0);
    light.position.set(600, 600, 600);
    scene.add(light);

    const meshMaterial = new THREE.MeshStandardMaterial();

    // Add a figures to the scene
    mesh1 = new THREE.Mesh(new THREE.TorusGeometry(60, 1.5, 16, 100), meshMaterial);
    mesh1.overdraw = true;
    mesh1.position.set(0,0,2);
    scene.add(mesh1);

    mesh2 = new THREE.Mesh(new THREE.TorusGeometry(50, 1.5, 16, 100), meshMaterial);
    mesh2.overdraw = true;
    mesh2.position.set(0,0,2);
    scene.add(mesh2);

    mesh3 = new THREE.Mesh(new THREE.TorusGeometry(40, 1.5, 16, 100), meshMaterial);
    mesh3.overdraw = true;
    mesh3.position.set(0,0,2);
    scene.add(mesh3);

    // Set the particle variables
    particleCount = 1500;
    particles = new THREE.Geometry();
    material = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 20
    });

    // Create each individual particle
    for (let p = 0; p < particleCount; p++) {
        // Create a particle with random position values, -250 -> 250
        let pX = Math.random() * 500 - 250,
            pY = Math.random() * 500 - 250,
            pZ = Math.random() * 500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
        // and add it to the geometry
        particles.vertices.push(particle);
    }

    // create the particle system
    let particleSystem = new THREE.Points(particles, material);

    // add it to the scene...
    scene.add(particleSystem);

    // add OrbitalControls lib so that we can have mouse and touch controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);

}

function animate() {
    requestAnimationFrame(animate);

    mesh1.rotation.x += 0.005;
    mesh1.rotation.y += 0.005;

    mesh2.rotation.x -= 0.003;
    mesh2.rotation.y -= 0.005;

    mesh3.rotation.x += 0.005;
    mesh3.rotation.z += 0.005;

    renderer.render(scene, camera);
    controls.update();
}
