import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCompareComponent } from './car-compare.component';
import { CarService } from './compare/car/car.service';

@NgModule({
    imports: [CommonModule],
    declarations: [CarCompareComponent],
    exports: [CarCompareComponent],
    providers: [CarService]
})

export class CarCompareModule { }
