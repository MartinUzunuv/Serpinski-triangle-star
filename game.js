arr = [];

branches = 9;

diference = Math.PI / 1.5;

size = 100;

class point {
  constructor(x, y, a, age, oldX, oldY, size) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.age = age;
    this.oldX = oldX;
    this.oldY = oldY;
    this.size = size;
  }
  draw() {
    drawLine(this.x, this.y, this.oldX, this.oldY);
  }
}

function render() {
  arr = [];
  for (z = 0; z < Math.PI * 1.99999999; z += Math.PI / 3) {
    arr.push(
      new point(
        window.innerWidth / 2,
        window.innerHeight / 2,
        z,
        0,
        window.innerWidth / 2,
        window.innerHeight / 2 + size * 2,
        size
      )
    );
  }
  for (i = 0; i < branches; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j].age == i) {
        arr.push(
          new point(
            arr[j].x + Math.cos(arr[j].a + diference) * arr[j].size,
            arr[j].y + Math.sin(arr[j].a + diference) * arr[j].size,
            arr[j].a + diference,
            i + 1,
            arr[j].x,
            arr[j].y,
            arr[j].size / 2
          )
        );
        arr.push(
          new point(
            arr[j].x + Math.cos(arr[j].a - diference) * arr[j].size,
            arr[j].y + Math.sin(arr[j].a - diference) * arr[j].size,
            arr[j].a - diference,
            i + 1,
            arr[j].x,
            arr[j].y,
            arr[j].size / 2
          )
        );
        arr.push(
          new point(
            arr[j].x + Math.cos(arr[j].a) * arr[j].size,
            arr[j].y + Math.sin(arr[j].a) * arr[j].size,
            arr[j].a,
            i + 1,
            arr[j].x,
            arr[j].y,
            arr[j].size / 2
          )
        );
      }
    }
  }
}

render();

function draw() {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == branches - 1) {
      arr[i].draw();
    }
  }
}

function update() {
  if (isKeyPressed[68]) {
    diference += Math.PI / 25;
    render();
  }
  if (isKeyPressed[65]) {
    diference -= Math.PI / 25;
    render();
  }
  if (isKeyPressed[87]) {
    branches += 1;
    render();
  }
  if (isKeyPressed[83]) {
    branches -= 1;
    render();
  }
}

function keyup(key) {
  console.log(key);
}
