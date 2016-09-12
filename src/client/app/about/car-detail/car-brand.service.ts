import { Injectable }    from '@angular/core';
import { Headers } from '@angular/http';
import { CARBRANDS } from '../../shared/car/mock-car';
import 'rxjs/add/operator/toPromise';

import { CarBrand } from '../../shared/car/car-brand.ts';

@Injectable()
export class CarBrandService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor() { }

  getCarBrands(): Promise<CarBrand[]> {
    return Promise.resolve(CARBRANDS);
  }

  getBrand(name: string): Promise<CarBrand> {
  return this.getCarBrands()
             .then(cars => cars.find(car => car.name === name));
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
