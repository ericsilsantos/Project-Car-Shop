// import { model } from "mongoose";
import { carSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarsService implements IService<ICar> {
  protected _frame:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._frame = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    const result = await this._frame.create(parsed.data);
    return result;
  }
}

export default CarsService;