class Ufo{
constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let shipbody = document.createElement("a-cylinder");
    shipbody.setAttribute("position","0,4,0");
    shipbody.setAttribute("segments-radial","8");
    shipbody.setAttribute("radius","4");
    shipbody.setAttribute("height","0.1");
    shipbody.setAttribute("color","red");
    this.obj.append( shipbody )


    let shiphead = document.createElement("a-sphere");
    shiphead.setAttribute("position","0,4,0");
    shiphead.setAttribute("radius","2");
    shiphead.setAttribute("theta-length","90");
    shiphead.setAttribute("theta-start","0");
    shiphead.setAttribute("side","double");
    this.obj.append( shiphead )


    //let shiplegs = document.createElement("a-box");
    //shiplegs.setAttribute("depth","0.1");
    //shiplegs.setAttribute("height","0.4");
    //shiplegs.setAttribute("width","4");
    //shiplegs.setAttribute("position","-3,1,0");
   // shiplegs.setAttribute("rotation","0 ,25 ,45");
   // this.obj.append( shiplegs )

    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;




    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )


}

invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < 0){
      this.y = rnd(10,20);
    }
  }
}