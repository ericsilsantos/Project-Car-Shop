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
    // if (id.length !== 24) {
    //   return res.status(400).json({ error: 'Id must have 24 hexadecimal characters' });
    // }
    const result = await this._service.readOne(id);
    // if (!result) return res.status(404).json({ error: 'Object not found' });
    res.status(200).json(result);
  }
}

export default CarControler;