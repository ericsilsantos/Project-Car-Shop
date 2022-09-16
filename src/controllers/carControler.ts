import { Response, Request } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarControler {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const car = { model, year, color, buyValue, seatsQty, doorsQty };
    const result = await this._service.create(car);
    res.status(201).json(result);
  }
}

export default CarControler;