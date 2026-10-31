class House{
    constructor(x, y, z){
    this.obj = document.createElement("a-entity");

 
  let box = document.createElement("a-box");
  box.setAttribute("width","1");
  box.setAttribute("height","1");
  box.setAttribute("depth","0.1");
  box.setAttribute("position","0 0.5 0")
  this.obj.append( box );



  let box2 = document.createElement("a-box");
  box2.setAttribute("width","1");
  box2.setAttribute("height","1");
  box2.setAttribute("depth","0.1");
  box2.setAttribute("position","0 1.5 0")
  box2.setAttribute("opacity","0.5");
  this.obj.append( box2 );



  let box3 = document.createElement("a-box");
  box3.setAttribute("width","1");
  box3.setAttribute("height","1");
  box3.setAttribute("depth","0.1");
  box3.setAttribute("position","0 2.5 0")
  this.obj.append( box3 );



   let box4 = document.createElement("a-box");
  box4.setAttribute("width","1");
  box4.setAttribute("height","1");
  box4.setAttribute("depth","0.1");
  box4.setAttribute("position","-1 0.5 0")
  this.obj.append( box4 );




  let box5 = document.createElement("a-box");
  box5.setAttribute("width","1");
  box5.setAttribute("height","1");
  box5.setAttribute("depth","0.1");
  box5.setAttribute("position","-1 1.5 0")
  this.obj.append( box5 );


  let box6 = document.createElement("a-box");
  box6.setAttribute("width","1");
  box6.setAttribute("height","1");
  box6.setAttribute("depth","0.1");
  box6.setAttribute("position","-1 2.5 0")
  this.obj.append( box6 );


    let box7 = document.createElement("a-box");
  box7.setAttribute("width","1");
  box7.setAttribute("height","1");
  box7.setAttribute("depth","0.1");
  box7.setAttribute("position","1 0.5 0")
  this.obj.append( box7 );

  
  let box8 = document.createElement("a-box");
  box8.setAttribute("width","1");
  box8.setAttribute("height","1");
  box8.setAttribute("depth","0.1");
  box8.setAttribute("position","1 1.5 0")
  this.obj.append( box8 );




  let box9 = document.createElement("a-box");
  box9.setAttribute("width","1");
  box9.setAttribute("height","1");
  box9.setAttribute("depth","0.1");
  box9.setAttribute("position","1 2.5 0")
  this.obj.append( box9 );


  
  let box10 = document.createElement("a-box");
  box10.setAttribute("width","1");
  box10.setAttribute("height","1");
  box10.setAttribute("depth","0.1");
  box10.setAttribute("position","1.50 0.5 0.5")
  box10.setAttribute("rotation","0  90  0");
  this.obj.append( box10 );


  let box11 = document.createElement("a-box");
  box11.setAttribute("width","1");
  box11.setAttribute("height","1");
  box11.setAttribute("depth","0.1");
  box11.setAttribute("position","1.50 1.5 0.5")
  box11.setAttribute("rotation","0  90  0");
  this.obj.append( box11 );



  let box12 = document.createElement("a-box");
  box12.setAttribute("width","1");
  box12.setAttribute("height","1");
  box12.setAttribute("depth","0.1");
  box12.setAttribute("position","1.50 2.5 0.5")
  box12.setAttribute("rotation","0  90  0");
  this.obj.append( box12 );



   let box13 = document.createElement("a-box");
  box13.setAttribute("width","1");
  box13.setAttribute("height","1");
  box13.setAttribute("depth","0.1");
  box13.setAttribute("position","1.50 0.5 1.5")
  box13.setAttribute("rotation","0  90  0");
  this.obj.append( box13 );


  let box14 = document.createElement("a-box");
  box14.setAttribute("width","1");
  box14.setAttribute("height","1");
  box14.setAttribute("depth","0.1");
  box14.setAttribute("position","1.50 1.5 1.5")
  box14.setAttribute("rotation","0  90  0");
  box14.setAttribute("opacity","0.5");
  this.obj.append( box14 );



  let box15 = document.createElement("a-box");
  box15.setAttribute("width","1");
  box15.setAttribute("height","1");
  box15.setAttribute("depth","0.1");
  box15.setAttribute("position","1.50 2.5 1.5")
  box15.setAttribute("rotation","0  90  0");
  this.obj.append( box15 );


  let box16 = document.createElement("a-box");
  box16.setAttribute("width","1");
  box16.setAttribute("height","1");
  box16.setAttribute("depth","0.1");
  box16.setAttribute("position","1.50 0.5 2.5")
  box16.setAttribute("rotation","0  90  0");
  this.obj.append( box16 );

    
  let box17 = document.createElement("a-box");
  box17.setAttribute("width","1");
  box17.setAttribute("height","1");
  box17.setAttribute("depth","0.1");
  box17.setAttribute("position","1.50 1.5 2.5")
  box17.setAttribute("rotation","0  90  0");
  this.obj.append( box17 );


  let box18 = document.createElement("a-box");
  box18.setAttribute("width","1");
  box18.setAttribute("height","1");
  box18.setAttribute("depth","0.1");
  box18.setAttribute("position","1.50 2.5 2.5")
  box18.setAttribute("rotation","0  90  0");
  this.obj.append( box18 );




  let box19 = document.createElement("a-box");
  box19.setAttribute("width","3");
  box19.setAttribute("height","3");
  box19.setAttribute("depth","0.1")
  box19.setAttribute("position","0 1.5 3")
  box19.setAttribute("rotation","0  180  0");
  this.obj.append( box19 );



  
  let box20 = document.createElement("a-box");
  box20.setAttribute("width","3");
  box20.setAttribute("height","3");
  box20.setAttribute("depth","0.1")
  box20.setAttribute("position","-1.5 1.5 1.5")
  box20.setAttribute("rotation","0  90 0");
  this.obj.append( box20 );


  let box21 = document.createElement("a-box");
  box21.setAttribute("width","3");
  box21.setAttribute("height","3");
  box21.setAttribute("depth","0.1")
  box21.setAttribute("position","0 0 1.5")
  box21.setAttribute("rotation","90  0 0");
  this.obj.append( box21 );

  
  let box22 = document.createElement("a-box");
  box22.setAttribute("width","3");
  box22.setAttribute("height","3");
  box22.setAttribute("depth","0.1")
  box22.setAttribute("position","0 3 1.5")
  box22.setAttribute("rotation","90  0 0");
  this.obj.append( box22 );


  let roof = document.createElement("a-cylinder")
  roof.setAttribute("radius","1.8");
  roof.setAttribute("height","3.1");
  roof.setAttribute("depth","20");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("position","0 3.9 1.5")
  roof.setAttribute("rotation","-90 0 0")
  this.obj.append( roof );

 this.obj.setAttribute("position",{x:x, y:y, z:z});
scene.append( this.obj )


    }
}