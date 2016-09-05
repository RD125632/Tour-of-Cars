import { Component, Input } from '@angular/core';

import { Car }        from './car';
import { CarService } from './car.service';

@Component({
  selector: 'car-details',
  templateUrl: './src/client/app/about/car-detail/car-detail.component.html',
  styleUrls: ['./src/client/app/about/car-detail/car-detail.component.css'],
})

export class CarDetailComponent {
  @Input() car: Car[];
}
