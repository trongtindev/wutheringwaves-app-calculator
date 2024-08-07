import type { BaseWeapon } from '../weapons/base';
import type { BaseCharacterSkills } from './skills';
import type { BaseCharacterSequences } from './sequences';
import type { BaseEcho } from '../echoes/base';
import { BaseCharacterEchoes } from './echoes';

export class BaseCharacter {
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
    if (level < 1 || level > 90) throw new Error('invalid-level');
    this.level = level;

    if (!weapon) throw new Error('invalid-weapon');
    this.weapon = weapon;

    if (!echoes || echoes.length === 0) throw new Error('invalid-echoes');
    this.echoes = new BaseCharacterEchoes(echoes);

    if (sequences < 0 || sequences > 6) throw new Error('invalid-sequences');
  }

  async initialize() {}
}
