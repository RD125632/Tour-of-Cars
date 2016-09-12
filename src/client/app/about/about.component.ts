import { Component, OnInit } from '@angular/core';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarBrand }        from '../shared/car/car-brand';
import { CarBrandService } from './car-detail/car-brand.service';
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

  carBrands: CarBrand[] = [];
  currentCarBrand: CarBrand;

  constructor(private carService: CarBrandService) {}

    ngOnInit(): void {
      this.getCars();
      this.updateDetailComponent("Toyota");
    }

    getCars(): void
    {
      this.carService.getCarBrands().then(cars => this.carBrands = cars);
    }

    goBack(): void {
      window.history.back();
    }

    updateDetailComponent(brandName : string) : void {
      this.carService.getBrand(brandName)
                      .then(car => this.currentCarBrand = car);
    }

}
