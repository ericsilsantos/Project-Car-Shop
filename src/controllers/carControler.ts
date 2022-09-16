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

  public async read(_req: Request, res: Response) {
    const result = await this._service.read();
    res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    res.status(200).json(result);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const carUpdate = req.body;
    const result = await this._service.update(id, carUpdate);
    res.status(200).json(result);
  }
}

export default CarControler;