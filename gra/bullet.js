function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  
  this.show = function() {
    noStroke();
    fill(22, 130, 64);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.evaporate = function() {
    this.toDelete = true;
  };

  this.collision = function(enemy) {
    var d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.r + enemy.r) {
      return true;
    } else {
      return false;
    }
  };

  this.move = function() {
    this.y = this.y - 8;
    
  };
}