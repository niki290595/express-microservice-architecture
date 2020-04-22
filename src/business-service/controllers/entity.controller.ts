import { IEntity } from "../../models/entity.model";

export class EntityController {
  private entities: IEntity[] = [];

  findAll(): IEntity[] {
    return this.entities;
  }
  findOne(id: string) {
    return this.entities.find((e) => e.ID == id);
  }
  update(entity: IEntity) {
    const index = this.entities.findIndex((e) => e.ID == entity.ID);

    if (index == -1) {
      this.entities.push({ ...entity });
    } else {
      this.entities[index] = { ...entity };
    }
  }
}
