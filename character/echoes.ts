import type { BaseEcho } from '../echoes/base';

export class BaseCharacterEchoes {
  echoes: BaseEcho[];

  constructor(echoes: BaseEcho[]) {
    this.echoes = echoes;
  }
}
