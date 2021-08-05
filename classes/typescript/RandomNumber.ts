
export class Random extends Number {
  readonly number: number;
  readonly randomnessValue: number;
  #verify(cryptoKey) {

  }
  constructor(number, randomnessValue, cryptoKey) {
    super()
    this.number = number;
    this.randomnessValue = randomnessValue;
  }
}