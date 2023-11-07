export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.fullBoard = new Array(width * height).fill('.');
  }

  change(position, pattern) {
    this.fullBoard[position] = pattern;
  }

  drop(pattern) {
    if (this.pattern) {
      throw "already falling";
    } else {
      this.pattern = pattern;
      this.position = Math.floor(this.width / 2);
      this.change(this.position, this.pattern);
    }
  }

  tick() {
    this.change(this.position, '.');
    this.position += this.width;
    this.change(this.position, this.pattern);
  }

  toString() {
    let result = '';
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        result += this.fullBoard[i * this.height + j];
      }
      result += '\n';
    }

    return result;
  }
}
