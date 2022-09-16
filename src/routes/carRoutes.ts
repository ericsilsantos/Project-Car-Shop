import { Router } from 'express';
import CarControler from '../controllers/carControler';
import CarsModel from '../models/carsModel';
import CarsService from '../services/carsServices';

const carRoute = Router();

const carModel = new CarsModel();
const carsService = new CarsService(carModel);
const carControler = new CarControler(carsService);

carRoute.post('/', (req, res) => carControler.create(req, res));
carRoute.get('/', (req, res) => carControler.read(req, res));

export default carRoute;