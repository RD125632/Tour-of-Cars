import { Component, OnInit } from '@angular/core';
import { CompareComponent } from './compare/compare.component';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-car-compare',
  templateUrl: 'car-compare.component.html',
  styleUrls: ['car-compare.component.css'],
  directives: [CompareComponent]
})

export class CarCompareComponent {



  constructor() {}

    ngOnInit(): void {

    }

}
