import * as sinon from 'sinon';
import chai from 'chai';
import CarsModel from '../../../models/carsModel';
import CarsService from '../../../services/carsServices';
import { ICar } from '../../../interfaces/ICar';
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
  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(car);
  });

  after(()=>{
    sinon.restore();
  })

  it('caso de sucesso', async () => {
    const resolve = await carService.create(newCar);
    expect(resolve).to.be.equal(car)
  });

});