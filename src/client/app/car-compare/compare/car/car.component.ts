import { Component, Input } from '@angular/core';
import { Car } from '../../../shared/car/car';

@Component({
  moduleId: module.id,
  selector: 'carCompare',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.css'],
})

export class CarComponent {
  @Input() car2compare: Car;

}
