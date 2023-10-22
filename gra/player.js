function Player() {
  this.x = width / 2;
  this.y = height - 20;
this.r = 20
  this.show = function() {
    fill(22, 130, 64);
    rectMode(CENTER);
    ellipse(this.x, this.y, this.r, this.r*2);
  };

  
  this.sterowanie=function() {
    
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x -4;
    }
     if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x +4;
    }
  }
  
}