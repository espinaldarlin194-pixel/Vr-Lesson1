class Cloud{
    constructor(x, y, z){
    this.obj = document.createElement("a-entity");


    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("position","0.5 10 0");
    sphere.setAttribute("height","4");
    this.obj.append( sphere );

        
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("position","1.5 10 0");
    sphere1.setAttribute("height","4");
    this.obj.append( sphere1 );

        
    let sphere2 = document.createElement("a-sphere");
    sphere2.setAttribute("position","2.5 10 0");
    sphere2.setAttribute("height","4");
    this.obj.append( sphere2 );

 
    
    let sphere3 = document.createElement("a-sphere");
    sphere3.setAttribute("position","2.5 10.7 0");
    sphere3.setAttribute("height","4");
    this.obj.append( sphere3 );


    let sphere4 = document.createElement("a-sphere");
    sphere4.setAttribute("position","1.5 10.7 0");
    sphere4.setAttribute("height","4");
    this.obj.append( sphere4 );


        
    let sphere5 = document.createElement("a-sphere");
    sphere5.setAttribute("position","0.5 10.7 0");
    sphere5.setAttribute("height","4");
    this.obj.append( sphere5 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}