class Circle {
  constructor(x, y, r) {
    let options = {
      friction: 0.3,
      restitution: 0.6,
      frictionAir: 0.05,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
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
    stroke(255);
    fill(0);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}
