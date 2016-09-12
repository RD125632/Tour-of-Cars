import { Component, Input } from '@angular/core';

import { CarBrand }        from '../../shared/car/car-brand';
import { CarBrandService } from './car-brand.service';

@Component({
  selector: 'car-details',
  templateUrl: './src/client/app/about/car-detail/car-detail.component.html',
  styleUrls: ['./src/client/app/about/car-detail/car-detail.component.css'],
})

export class CarDetailComponent {
  @Input() car: CarBrand[];
}
