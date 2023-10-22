var Engine = Matter.Engine,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies,
  Composites = Matter.Composites;

let punktyzielone = 0;
let punktyczerwone = 0;

let engine;
let world;
let boxes = [];
let circles = [];
let obiekty = [];
let mConstraint;
let gracz;
let woda = [];
let rotacja;

let canvas;
let sizes = [20, 30, 40];
let wielkoscwody = 15;

function setup() {
	
	var canvas = createCanvas(800, 800);
	canvas.parent('square');
	
	

  engine = Engine.create();
  world = engine.world;
  
  obiekty.push(new Sciana(0, height / 2, 10, height)); //lewo
  obiekty.push(new Sciana(width, height / 2, 10, height)); //granice swiata prawo
  obiekty.push(new Sciana(200, 0, 1200, 10));
  
  
  obiekty.push(new Podloga1(200, height-20, 400, 20));    //x, y, w, h dół
  obiekty.push(new Podloga2(600, height-20, 400, 20));
  
  rotacja = new Rect(width / 2, height / 2, 20, 300);
  
  World.add(world, rotacja);
  World.add(world, obiekty); //dodanie do swiata

  let mouse = Mouse.create(canvas.elt);
  let options = {
    mouse: mouse  //intergracja myszki z obiektami
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint); //dodanie integracji myszki
  
}



let count = 0;
function draw() {
  
  
  
  
 
  background(51);
  if (frameCount % 76 === 0) {
    //print (++count);
    let size = random(sizes);
    if (random() < 0.5) {
      boxes.push(new Box(width / 2-60, 80, size, size));
    } else {
      circles.push(new Circle(width / 2+60, 80, size / 2));
    }
  }
  if (frameCount % 16 === 0) {
   // let wielkosc = random(wielkoscwody)
    woda.push(new Woda(width / 2, height-35, wielkoscwody));
  }
  
  rotacja.show();
  
  
  Engine.update(engine);
  for (let box of boxes) {
    box.show();
  }
  for (let circle of circles) {
    circle.show();
  }
  for (let obiekt of obiekty) {
    obiekt.show();
  }
  for (let wody of woda) {
    wody.show();
  }
}