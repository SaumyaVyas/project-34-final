class Ground {
    constructor(x,y,width,height) {
    var options = {
    isStatic: true
    }
    this.height = height;
    World.add(world, this.body);
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    }
    display(){
    rect(pos.x, pos.y, this.width, this.height);
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    } }
  