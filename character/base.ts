import type { BaseWeapon } from '../weapons/base';
import type { BaseCharacterSkills } from './skills';
import type { BaseCharacterSequences } from './sequences';
import type { BaseEcho } from '../echoes/base';
import { BaseCharacterEchoes } from './echoes';
import { CalculatorBehaviour } from '../behaviour';

export class BaseCharacter extends CalculatorBehaviour {
  level: number;
  sequences: BaseCharacterSequences;
  skills: BaseCharacterSkills;
  weapon: BaseWeapon;
  echoes: BaseCharacterEchoes;

  constructor(
    level: number,
    sequences: number,
    weapon: BaseWeapon,
    echoes: BaseEcho[],
  ) {
    super();

    if (level < 1 || level > 90) throw new Error('invalid-level');
    this.level = level;

    if (!weapon) throw new Error('invalid-weapon');
    this.weapon = weapon;

    if (!echoes || echoes.length === 0) throw new Error('invalid-echoes');
    this.echoes = new BaseCharacterEchoes(echoes);

    if (sequences < 0 || sequences > 6) throw new Error('invalid-sequences');
  }

  async getStats() {
    return {
      atk: 0,
      def: 0,
      hp: 0,
      critRate: 0,
      critDMG: 0,
    };
  }

  override async onUpdate(time: number) {
    super.onUpdate(time);
  }
}
