export class CalculatorBehaviour {
  id: string;

  constructor() {
    this.id = randomId();
  }

  async onStart() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async onUpdate(time: number) {}

  async onStop() {}
}
