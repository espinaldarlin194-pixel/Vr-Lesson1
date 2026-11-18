let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -2;

  loop();
})

function loop(){
  target.a += target.da;

  if(target.a <= -Math.PI / -2 || target.a >= Math.PI / -2){
    target.da = -target.da;
  }

  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  window.requestAnimationFrame( loop );
}