import { CalculatorBehaviour } from '../behaviour';

export type SkillType =
  | 'Forte Circuit'
  | 'Resonance Liberation'
  | 'Resonance Skill'
  | 'Intro Skill'
  | 'Outro Skill'
  | 'Basic Attack';

export class BaseCharacterSkill extends CalculatorBehaviour {
  type: SkillType;

  constructor(type: SkillType) {
    super();

    this.type = type;
  }
}
