class Ground {
    constructor(x,y,w,h,image){
      var options = {
          isStatic:true

      } 
      this.body = Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
      this.width = w
      this.height = h
      this.image = image

    }

    show(){
        var angle = this.body.angle;
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
      
    }
}