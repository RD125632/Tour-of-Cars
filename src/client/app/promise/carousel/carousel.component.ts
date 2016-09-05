import { Component } from '@angular/core';

import { IImage } from './iimage.interface';

//Component Decorator
@Component ({
  selector: 'carousel',         // Name of our tag
  templateUrl: './src/client/app/promise/carousel/carousel.component.html',
  styleUrls: ['./src/client/app/promise/carousel/carousel.component.css']
})

export class CarouselComponent {
    public images = IMAGES;
}

var IMAGES: IImage[] = [
  { "title": "Bizzarrini P538", "url": "../../assets/carousel/bizp.jpg" },
  { "title": "Lamborghini Aventador", "url": "../../assets/carousel/lambo2.jpg" },
  { "title": "Lamborghini Murciélago", "url": "../../assets/carousel/lambo1.jpg" },
  { "title": "Porsche 918", "url": "../../assets/carousel/pors1.jpg" },
  { "title": "Bizzarrini P538", "url": "../../assets/carousel/bizp.jpg" }
];
