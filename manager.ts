import type { CalculatorBehaviour } from './behaviour';

export class CalculatorManager {
  behaviours: CalculatorBehaviour[];
  isStarted: boolean = false;
  timeScale: number = 1;

  registerBehaviour(behaviour: CalculatorBehaviour) {
    this.behaviours.push(behaviour);
  }

  unregisterBehaviour(behaviour: CalculatorBehaviour) {
    const index = this.behaviours.findIndex((e) => e.id === behaviour.id);
    if (index >= 0) this.behaviours.splice(index, 1);
  }

  start() {
    console.debug('start');

    for (const behaviour of this.behaviours) {
      behaviour.onStart();
    }

    this.isStarted = true;
    this.loop();
  }

  private loop() {
    const time = (30 / 1000) * this.timeScale;
    for (const behaviour of this.behaviours) {
      behaviour.onUpdate(time);
    }

    if (!this.isStarted) return;
    setTimeout(() => this.loop(), time);
  }

  stop() {
    console.debug('stop');
    this.isStarted = false;
    for (const behaviour of this.behaviours) {
      behaviour.onStop();
    }
  }
}
