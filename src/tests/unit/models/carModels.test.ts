import * as sinon from 'sinon';
import chai from 'chai';
import { ICar } from '../../../interfaces/ICar';
import { Model } from 'mongoose';
// import CarsModel from '../../../models/carsModel';
import CarsModel from '../../../models/carsModel';
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
  before(async() => {
    sinon.stub(Model, 'create').resolves(car);
  });

  after(() => {
    sinon.restore();
  });
  const carsModel = new CarsModel();
  it('caso de sucesso', async () => {
    const resolve = await carsModel.create(newCar);
    expect(resolve).to.be.deep.equal(car)
  });
});