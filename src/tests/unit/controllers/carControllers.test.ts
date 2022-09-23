import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import CarsModel from '../../../models/carsModel';
import CarsService from '../../../services/carsServices';
import { ICar } from '../../../interfaces/ICar';
import CarControler from '../../../controllers/carControler';
const { expect } = chai;

const newCar: ICar = {
  model: "aaaa",
  year: 2000,
  color: "preto sujo",
  buyValue: 2,
  doorsQty: 2,
  seatsQty: 2,
}

const car = {
  _id: "as5as5da4s4dasd",
  model: "aaaa",
  year: 2000,
  color: "preto sujo",
  buyValue: 2,
  doorsQty: 2,
  seatsQty: 2,
}

describe('Criando um carro', () => {
  const carModel = new CarsModel();
  const carService = new CarsService(carModel);
  const carControler = new CarControler(carService);
  const req = {} as Request;
  const res = {} as Response;
  req.body = newCar;
  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(car);
  });

  after(()=>{
    sinon.restore();
  })

  it('caso de sucesso', async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    req.body = newCar;
    await carControler.create(req, res);

    const statusStub = res.status as sinon.SinonStub
    const jsonStub = res.json as sinon.SinonStub

    expect(statusStub.calledWith(201)).to.be.true;
    expect(jsonStub.calledWith(car)).to.be.true;
    // await carControler.create(req, res);
    // expect(result.status).to.be.equal(car)
  });

});