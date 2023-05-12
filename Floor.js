const DIRECTIONS = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
};

class Floor {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw(color) {
    fill(color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}

class MovingFloor extends Floor {
  constructor(x, y, w, h, direction, limit1, limit2, speed) {
    super(x, y, w, h);
    this.direction = direction;
    this.limit1 = limit1;
    this.limit2 = limit2;
    this.speed = speed;
  }

  update() {
    if (this.direction === DIRECTIONS.HORIZONTAL) {
      let turnAround = this.x + this.speed <= this.limit2 && this.x + this.speed >= this.limit1;
      this.speed = turnAround ? this.speed : this.speed*-1;
      this.x += this.speed;
    } else if (this.direction === DIRECTIONS.VERTICAL) {
      let turnAround = this.y + this.speed <= this.limit2 && this.y + this.speed >= this.limit1;
      this.speed = turnAround ? this.speed : this.speed*-1
      this.y += this.speed;
    }
  }
}
