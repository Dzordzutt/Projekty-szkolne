class Rect {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true,
      inertia: Infinity,
      rotationSpeed: 0.15,
      frictionAir: 0.05,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke(199, 57, 57);
    fill(0); //kolor
    rect(0, 0, this.w, this.h);
    Matter.Body.setAngle(this.body, angle + this.body.rotationSpeed);
    pop();
  }

  //requestAnimationFrame(updateRotation);
}
