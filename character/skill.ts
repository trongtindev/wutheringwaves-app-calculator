export type SkillType =
  | 'Forte Circuit'
  | 'Resonance Liberation'
  | 'Resonance Skill'
  | 'Intro Skill'
  | 'Outro Skill'
  | 'Basic Attack';

export class BaseCharacterSkill {
  type: SkillType;

  constructor(type: SkillType) {
    this.type = type;
  }
}
