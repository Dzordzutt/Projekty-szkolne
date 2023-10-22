var enemies = [];
var bullets = [];
var koniec = false;
var player;
var score = 0;


  
  
  

function setup() {
	
	
	 
  
  //createCanvas(400, 600);
      
   
 var canvas = createCanvas(400, 600);
 canvas.parent('square');
 
				
   bg = loadImage('bg.jpg');




  player = new Player();
  
  for (var i = 0; i < 55; i++){
    enemies.push(new Enemy());
  }

   
}

function refreshPage(){
    window.location.reload();
} 

function draw() {
  background(255);
  fill(155);
  textSize(32);
 text('Score: '+score, 10, 40);
 player.show();
player.sterowanie();
  
   
  
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < enemies.length; j++) {
      if (bullets[i].collision(enemies[j])) {
        enemies.splice(j, 1);
        bullets[i].evaporate();
        score+=10;
        
         if (enemies.splice) {
    enemies.push(new Enemy());
  }
      }
    }
  }
  for (var i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }
  
  //enemy.show(); 
  //enemy.move();
  
  
  if(koniec) { clear(); text('Koniec Gry', 200, 200);}
  else {
    for (var i = 0; i < enemies.length; i++) {
       
      enemies[i].show();
      enemies[i].move();
       if (enemies[i].collision(player)) {
         koniec = true;
         
      enemies.splice(i);
       }
    }
  }
}

 function keyPressed() {
  if (key === ' ') {
    var bullet = new Bullet(player.x, height);
   
    bullets.push(bullet);
  } }
