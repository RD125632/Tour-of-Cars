import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { CarouselComponent } from './carousel/carousel.component';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-promise',
  templateUrl: 'promise.component.html',
  styleUrls: ['promise.component.css'],
  directives: [CarouselComponent]
})

export class PromiseComponent {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

}
