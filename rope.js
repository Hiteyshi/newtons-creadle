class Rope{
        constructor (a,b,offsetX,offsetY){
        var options={
            bodyA:a,
            bodyB:b,
            stiffness:0.04,
            length:200,
            pointB:{x:offsetX,y:offsetY},
            }
            this.chain=Matter.Constraint.create(options);
            World.add(world,this.chain)
        }
      display(){
          var pointa=this.chain.bodyA.position;
          var pointb=this.chain.bodyB.position;
          var ancorX=pointa.x;
          var ancorY=pointa.y;
          var ancorBx=pointb.x+this.chain.pointB.x;
          var ancorBy=pointb.y+this.chain.pointB.y;
          strokeWeight(4);
          line(ancorX,ancorY,ancorBx,ancorBy);
      
      }
      
      }
