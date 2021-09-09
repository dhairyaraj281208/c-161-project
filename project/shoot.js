AFRAME.registerComponent("balls", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {

          if (e.key === "z") {
            var  ball = document.createElement("a-entity");
    
            ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf");
    
            ball.setAttribute("scale", { x: 3, y: 3,  z: 3});
    
            var cam = document.querySelector("#camera");
    
            pos = cam.getAttribute("position");
    
            ball.setAttribute("position", {
              x: pos.x,
              y: pos.y,
              z: pos.z,
            });
    
            var camera = document.querySelector("#camera").object3D;
    

            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
  
            ball.setAttribute("velocity", direction.multiplyScalar(-10));
    
            var scene = document.querySelector("#scene");
    
            scene.appendChild(ball);
          }
      });
    },
  });
  