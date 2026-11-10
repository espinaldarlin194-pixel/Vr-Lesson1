let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let rockets = [];




window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 



    for(let i =0; i < 100; i++){
    let x = rnd(-20,50);
    let y = rnd(6,20)
    let z = rnd(-20,50);
    let speed = rnd(2,6) / 100;
    rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

 

  loop();
})

function loop(){
 for(let rocket of rockets){
  rocket.launch();
 }
  
  window.requestAnimationFrame( loop );
}
