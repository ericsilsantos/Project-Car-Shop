// import { model } from "mongoose";
import { carSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarsService implements IService<ICar> {
  protected _car:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const result = await this._car.create(parsed.data);
    return result;
  }

  public async read(): Promise<ICar[]> {
    const result = await this._car.read();
    return result;
  }
}

export default CarsService;