import { Component, OnInit } from '@angular/core';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { Car }        from './car-detail/car';
import { CarService } from './car-detail/car.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [CarDetailComponent]
})

export class AboutComponent implements OnInit {

  cars: Car[] = [];
  currentCar: Car;

  constructor(private carService: CarService) {}

    ngOnInit(): void {
      this.getCars();
      this.updateDetailComponent("Toyota");
    }

    getCars(): void
    {
      this.carService.getCarBrands().then(cars => this.cars = cars);
    }

    goBack(): void {
      window.history.back();
    }

    updateDetailComponent(brandName : string) : void {
      this.carService.getBrand(brandName)
                      .then(car => this.currentCar = car);
    }

}
