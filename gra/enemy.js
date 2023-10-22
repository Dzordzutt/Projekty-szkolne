function Enemy() {

  //ellipse (i*50+100, this.y, 30, 30);
  //ellipse (i*80+40, this.y+40, 30, 30);
  this.x = random(width) ;
  this.y = random(height) - 500;
  //this.d = 30
  this.r = 30;
  let speed = 4.5;
 
  this.show = function() {
      if(this.y>=height) {
      this.y = random(height) - 500;
        this.x = random(width) ;
      //this.x = random(width);
     //this.move();
        for (var i =0; i<random(0, 255); i++) {
        //fill(i, 100, i)
        ellipse (this.x, this.y, this.r);

       // this.y= 0;
        }
    }
    else {
         for ( var i =0; i<random(0, 255); i++) {
      fill(i, 8, 0)
    }
    ellipse (this.x, this.y, this.r);
    } 
   }  
  
  this.move = function() {
    this.y += speed/2;   
    this.x = this.x + random(-2, 2);
  }
  
   this.collision = function(player) {
    var d = dist(this.x, this.y, player.x, player.y);
    if (d < this.r + player.r-4) {
      return true;
    } else {
      return false;
    }
  };
  
}