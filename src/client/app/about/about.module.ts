import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CarService } from './car-detail/car.service';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent],
    exports: [AboutComponent],
    providers: [CarService],
})

export class AboutModule { }
