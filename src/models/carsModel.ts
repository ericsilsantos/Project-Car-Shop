import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
// import { IModel } from '../interfaces/IModel';
import MongoModel from './mongoModel';
// import { IVehicle } from "../interfaces/IVehicle";

const carSchema = new Schema<ICar>({
  status: Boolean,
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarsModel;