import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;
  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find({});
  }

  public async readOne(stg: string): Promise<T | null> {
    return this._model.findById(stg);
  }

  public async update(stg: string, obj: T): Promise<T | null> {
    return this._model.findByIdAndUpdate(stg, { ...obj } as UpdateQuery<T>);
  }

  public async delete(stg: string): Promise<T | null> {
    return this._model.findByIdAndDelete(stg);
  }
}

export default MongoModel;
