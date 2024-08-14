import { BaseBasicCharacterSkill } from '~/calculator/character/skill';

export class BlazingEnlightment extends BaseBasicCharacterSkill {
  constructor() {
    super('Basic Attack');

    this.basicDMG = [[51.39 * 2, 61.84 * 2, 63.51 * 3, 88.34 + 51.53 * 4]];
    this.midAirDMG = [[106.89, 88.63 * 2, 76.66 * 3, 66.26 + 38.65 * 4]];
    this.heavyAttackDMG = [[50.5 * 3 + 64.93]];
    this.midAirHeavyAttackDMG = [[214.78]];
    this.dodgeCounterDMG = [[144.0 * 3]];
    this.midAirAttackSTACost = [[5]];
    this.maxContinuousAttack = 4;
  }
}
