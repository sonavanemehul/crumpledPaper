class Paper {
  constructor(x,y,r){
      var optoins={
          isStatic :false,
          restitution: 0.3,
          density: 1.2,
          friction: 0
      }
      this.x=x;
      this.y=y;
      this.r=r;

      this.image=loadImage("Paper.png");
      this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,optoins);
      World.add(world,this.body);
  }
  display() {
var ppos=this.body.position;
push();
translate (ppos.x,ppos.y);
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop();

  }
}
