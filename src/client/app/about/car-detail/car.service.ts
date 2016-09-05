import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';
import { CARS } from './mock-car';
import 'rxjs/add/operator/toPromise';

import { Car } from './car.ts';

@Injectable()
export class CarService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor() { }

  getCarBrands(): Promise<Car[]> {
    return Promise.resolve(CARS);
  }

  getBrand(name: string): Promise<Car> {
  return this.getCarBrands()
             .then(cars => cars.find(car => car.name === name));
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
