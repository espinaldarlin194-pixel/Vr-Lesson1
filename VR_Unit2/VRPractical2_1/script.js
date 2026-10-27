let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
 scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
 

   for(let i=0; i< 100; i++){
let x = rnd(-20,20);
let z = rnd(-20,20);
createCloud(x,6,z);
 }

 for(let i=0; i< 20; i++){
  let x = rnd(-20,20);
  let z = rnd(-20,20);
  createHouse(x,0,z);
 }






   /*Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
   Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
   */
})



/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/


function createCloud(x, y, z){
let cloud = document.createElement("a-entity");

let sphere = document.createElement("a-sphere");
sphere.setAttribute("position","0.5 10 0");
sphere.setAttribute("height","4");
cloud.append( sphere );

let sphere1 = document.createElement("a-sphere");
sphere1.setAttribute("position","1.5 10 0");
sphere1.setAttribute("height","4");
cloud.append( sphere1 );

let sphere2 = document.createElement("a-sphere");
sphere2.setAttribute("position","2.5 10 0");
sphere2.setAttribute("height","4");
cloud.append( sphere2 );

let sphere3 = document.createElement("a-sphere");
sphere3.setAttribute("position","2.5 10.7 0");
sphere3.setAttribute("height","4");
cloud.append( sphere3 );


let sphere4 = document.createElement("a-sphere");
sphere4.setAttribute("position","1.5 10.7 0");
sphere4.setAttribute("height","4");
cloud.append( sphere4 );


let sphere5 = document.createElement("a-sphere");
sphere5.setAttribute("position","0.5 10.7 0");
sphere5.setAttribute("height","4");
cloud.append( sphere5 );


cloud.setAttribute("position",{x:x, y:y, z:z});
scene.append( cloud )
}

















/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/

function createHouse(x, y, z){
  let house = document.createElement("a-entity");
 
  let box = document.createElement("a-box");
  box.setAttribute("width","1");
  box.setAttribute("height","1");
  box.setAttribute("depth","0.1");
  box.setAttribute("position","0 0.5 0")
  house.append( box );

  let box2 = document.createElement("a-box");
  box2.setAttribute("width","1");
  box2.setAttribute("height","1");
  box2.setAttribute("depth","0.1");
  box2.setAttribute("position","0 1.5 0")
  box2.setAttribute("opacity","0.5");
  house.append( box2 );

    let box3 = document.createElement("a-box");
  box3.setAttribute("width","1");
  box3.setAttribute("height","1");
  box3.setAttribute("depth","0.1");
  box3.setAttribute("position","0 2.5 0")
  house.append( box3 );



   let box4 = document.createElement("a-box");
  box4.setAttribute("width","1");
  box4.setAttribute("height","1");
  box4.setAttribute("depth","0.1");
  box4.setAttribute("position","-1 0.5 0")
  house.append( box4 );

  let box5 = document.createElement("a-box");
  box5.setAttribute("width","1");
  box5.setAttribute("height","1");
  box5.setAttribute("depth","0.1");
  box5.setAttribute("position","-1 1.5 0")
  house.append( box5 );

    let box6 = document.createElement("a-box");
  box6.setAttribute("width","1");
  box6.setAttribute("height","1");
  box6.setAttribute("depth","0.1");
  box6.setAttribute("position","-1 2.5 0")
  house.append( box6 );

    let box7 = document.createElement("a-box");
  box7.setAttribute("width","1");
  box7.setAttribute("height","1");
  box7.setAttribute("depth","0.1");
  box7.setAttribute("position","1 0.5 0")
  house.append( box7 );


  
  let box8 = document.createElement("a-box");
  box8.setAttribute("width","1");
  box8.setAttribute("height","1");
  box8.setAttribute("depth","0.1");
  box8.setAttribute("position","1 1.5 0")
  house.append( box8 );

    let box9 = document.createElement("a-box");
  box9.setAttribute("width","1");
  box9.setAttribute("height","1");
  box9.setAttribute("depth","0.1");
  box9.setAttribute("position","1 2.5 0")
  house.append( box9 );

//right wall window

  let box10 = document.createElement("a-box");
  box10.setAttribute("width","1");
  box10.setAttribute("height","1");
  box10.setAttribute("depth","0.1");
  box10.setAttribute("position","1.50 0.5 0.5")
  box10.setAttribute("rotation","0  90  0");
  house.append( box10 );

  let box11 = document.createElement("a-box");
  box11.setAttribute("width","1");
  box11.setAttribute("height","1");
  box11.setAttribute("depth","0.1");
  box11.setAttribute("position","1.50 1.5 0.5")
  box11.setAttribute("rotation","0  90  0");
  house.append( box11 );

    let box12 = document.createElement("a-box");
  box12.setAttribute("width","1");
  box12.setAttribute("height","1");
  box12.setAttribute("depth","0.1");
  box12.setAttribute("position","1.50 2.5 0.5")
  box12.setAttribute("rotation","0  90  0");
  house.append( box12 );



   let box13 = document.createElement("a-box");
  box13.setAttribute("width","1");
  box13.setAttribute("height","1");
  box13.setAttribute("depth","0.1");
  box13.setAttribute("position","1.50 0.5 1.5")
  box13.setAttribute("rotation","0  90  0");
  house.append( box13 );

  let box14 = document.createElement("a-box");
  box14.setAttribute("width","1");
  box14.setAttribute("height","1");
  box14.setAttribute("depth","0.1");
  box14.setAttribute("position","1.50 1.5 1.5")
  box14.setAttribute("rotation","0  90  0");
  box14.setAttribute("opacity","0.5");
  house.append( box14 );

    let box15 = document.createElement("a-box");
  box15.setAttribute("width","1");
  box15.setAttribute("height","1");
  box15.setAttribute("depth","0.1");
  box15.setAttribute("position","1.50 2.5 1.5")
  box15.setAttribute("rotation","0  90  0");
  house.append( box15 );

    let box16 = document.createElement("a-box");
  box16.setAttribute("width","1");
  box16.setAttribute("height","1");
  box16.setAttribute("depth","0.1");
  box16.setAttribute("position","1.50 0.5 2.5")
  box16.setAttribute("rotation","0  90  0");
  house.append( box16 );


  
  let box17 = document.createElement("a-box");
  box17.setAttribute("width","1");
  box17.setAttribute("height","1");
  box17.setAttribute("depth","0.1");
  box17.setAttribute("position","1.50 1.5 2.5")
  box17.setAttribute("rotation","0  90  0");
  house.append( box17 );

    let box18 = document.createElement("a-box");
  box18.setAttribute("width","1");
  box18.setAttribute("height","1");
  box18.setAttribute("depth","0.1");
  box18.setAttribute("position","1.50 2.5 2.5")
  box18.setAttribute("rotation","0  90  0");
  house.append( box18 );


  let box19 = document.createElement("a-box");
  box19.setAttribute("width","3");
  box19.setAttribute("height","3");
  box19.setAttribute("depth","0.1")
  box19.setAttribute("position","0 1.5 3")
  box19.setAttribute("rotation","0  180  0");
  house.append( box19 );



  
  let box20 = document.createElement("a-box");
  box20.setAttribute("width","3");
  box20.setAttribute("height","3");
  box20.setAttribute("depth","0.1")
  box20.setAttribute("position","-1.5 1.5 1.5")
  box20.setAttribute("rotation","0  90 0");
  house.append( box20 );

  let box21 = document.createElement("a-box");
  box21.setAttribute("width","3");
  box21.setAttribute("height","3");
  box21.setAttribute("depth","0.1")
  box21.setAttribute("position","0 0 1.5")
  box21.setAttribute("rotation","90  0 0");
  house.append( box21 );

  
  let box22 = document.createElement("a-box");
  box22.setAttribute("width","3");
  box22.setAttribute("height","3");
  box22.setAttribute("depth","0.1")
  box22.setAttribute("position","0 3 1.5")
  box22.setAttribute("rotation","90  0 0");
  house.append( box22 );


  let roof = document.createElement("a-cylinder")
  roof.setAttribute("radius","1.8");
  roof.setAttribute("height","3.1");
  roof.setAttribute("depth","20");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("position","0 3.9 1.5")
  roof.setAttribute("rotation","-90 0 0")
  house.append( roof );

house.setAttribute("position",{x:x, y:y, z:z});
scene.append( house )

}










function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



