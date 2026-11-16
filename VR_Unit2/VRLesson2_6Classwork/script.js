let scene;
let clone, mech1;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech1 = document.getElementById("mech1");
  clone = mech1.cloneNode(true);
  clone.setAttribute("position",{x:-13, y:13, z:-10});
  scene.append(clone);

  let robot16 = new Mech(-13,13,-40);
  let robot15 = new Mech(0,13,-40);
  let robot14 = new Mech(13,13,-40);
  let robot13 = new Mech(-13,13,-25);
  let robot12 = new Mech(0,13,-25);
  let robot11 = new Mech(13,13,-25);
  let robot = new Mech(13,13,-10);
  let robot2 = new Mech(13,13,8);
  let robot3 = new Mech(0,13,8);
  let robot4 = new Mech(-13,13,8);
  let robot5 = new Mech(13,13,25);
  let robot6 = new Mech(0,13,25);
  let robot7 = new Mech(-13,13,25);
  let robot8 = new Mech(13,13,40);
  let robot9 = new Mech(0,13,40);
  let robot10 = new Mech(-13,13,40);


  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
