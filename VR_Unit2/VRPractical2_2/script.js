let scene, car, sun, rocket, pokemonball, dude;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#Car");
    sun = document.querySelector("#Sun");
    rocket = document.querySelector("#rocket");
    pokemonball = document.querySelector("#pokemonball");
    dude = document.querySelector("#dude");


    dude.y = 0;
    dude.dy = 0.05;

    pokemonball.x = 4;
    pokemonball.dx =2;

    car.x = 3;
    car.dx = 0.3;

    sun.o = 0;
    sun.do = 0.005;

    rocket.y =-2;
    rocket.dy =0.05;

    loop();
})
    
function loop(){
        car.x += car.dx;
        car.setAttribute("position",{x:car.x , y:0,z:-5})
        
        sun.o += sun.do;
        sun.setAttribute("opacity",sun.o);
        
        rocket.y += rocket.dy
        rocket.setAttribute("position",`0 ${rocket.y} -10`);
        
        pokemonball.x += pokemonball.dx
        pokemonball.setAttribute("rotation",{x:pokemonball.x ,y:0,z:0})

        dude.y += dude.dy
        dude.setAttribute("scale",{x:1 , y:dude.y ,z:0});

        
        
        window.requestAnimationFrame(loop);
}






