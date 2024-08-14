import { CalculatorBehaviour } from '../behaviour';
import type { BaseCharacter } from './base';

export type SkillType =
  | 'Forte Circuit'
  | 'Resonance Liberation'
  | 'Resonance Skill'
  | 'Intro Skill'
  | 'Outro Skill'
  | 'Basic Attack';

export class BaseCharacterSkill extends CalculatorBehaviour {
  owner: BaseCharacter;
  type: SkillType;
  level: number;
  cooldown: number;
  continuousAttack: number = 0;
  maxContinuousAttack: number = 0;

  constructor(type: SkillType) {
    super();

    this.type = type;
  }

  override async onUpdate(time: number) {
    if (this.cooldown > 0) {
      this.cooldown -= time;
      if (this.cooldown < 0) this.cooldown = 0;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async use(args?: Record<string, any>) {
    if (this.type === 'Basic Attack') {
      this.continuousAttack += 1;
    } else {
      this.continuousAttack = 0;
    }
  }

  async getDMG(): Promise<number> {
    return 0;
  }
}

export class BaseBasicCharacterSkill extends BaseCharacterSkill {
  basicDMG: number[][] = [];
  midAirDMG: number[][] = [];
  heavyAttackDMG: number[][] = [];
  midAirHeavyAttackDMG: number[][] = [];
  dodgeCounterDMG: number[][] = [];
  midAirAttackSTACost: number[][] = [];

  override async getDMG(): Promise<number> {
    return 0;
  }
}
