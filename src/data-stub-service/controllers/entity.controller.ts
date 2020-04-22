import { IEntity } from "../../models/entity.model";

const MAX_ENTITY_COUNT = 20;

export class EntityController {
  private entityIDs: string[] = [];

  constructor() {
    this.entityIDs = [];
    const firstCharCode = "A".charCodeAt(0);
    const lastCharCode = firstCharCode + MAX_ENTITY_COUNT - 1;
    for (let charCode = firstCharCode; charCode <= lastCharCode; charCode++) {
      this.entityIDs.push(String.fromCharCode(charCode));
    }
  }

  getUpdateEntity(): IEntity {
    const index = Math.floor(Math.random() * MAX_ENTITY_COUNT);

    const ID = this.entityIDs[index];
    return this.updateEntity(ID);
  }

  private updateEntity(ID: string): IEntity {
    return {
      ID: ID,
      p1: this.generateNumber(),
      p2: this.generateNumber(),
      p3: this.generateNumber(),
      p4: this.generateNumber(),
      p5: this.generateNumber(),
    };
  }

  generateNumber(): number {
    return 2 * Math.random() - 1;
  }
}
