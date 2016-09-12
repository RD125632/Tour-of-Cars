import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { CarBrandService } from './car-detail/car-brand.service';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent],
    exports: [AboutComponent],
    providers: [CarBrandService],
})

export class AboutModule { }
