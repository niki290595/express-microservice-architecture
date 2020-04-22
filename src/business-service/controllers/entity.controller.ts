import { IEntity } from "../../models/entity.model";

interface IUpdateEntityInput {
  ID: IEntity["ID"];
  p1: IEntity["p1"];
  p2: IEntity["p2"];
  p3: IEntity["p3"];
  p4: IEntity["p4"];
  p5: IEntity["p5"];
}

export class EntityController {
  private entities: IEntity[] = [
    {
      ID: "O",
      p1: -0.7842016959037545,
      p2: 0.5629499928567179,
      p3: -0.3970328283045399,
      p4: -0.6510563701928587,
      p5: 0.08803461003366575,
    },
  ];

  findAll(): IEntity[] {
    return this.entities;
  }
  findOne(id: string) {
    return this.entities.find((e) => e.ID == id);
  }
  update(entity: IUpdateEntityInput) {
    const index = this.entities.findIndex((e) => e.ID == entity.ID);

    if (index == -1) {
      this.entities.push({ ...entity });
    } else {
      this.entities[index] = { ...entity };
    }
  }
}
