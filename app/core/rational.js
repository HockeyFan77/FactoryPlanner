export class Rational {

  constructor(p, q = 1.0) {
    this.p = p;
    this.q = q;
  }

  toNumber() {
    return this.p / this.q;
  }

}