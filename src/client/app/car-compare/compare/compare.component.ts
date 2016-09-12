import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../shared/car/car';
import { CarComponent } from './car/car.component';
import { CarService } from './car/car.service';

@Component({
  moduleId: module.id,
  selector: 'compare-component',
  templateUrl: 'compare.component.html',
  styleUrls: ['compare.component.css'],
  directives: [CarComponent]
})

export class CompareComponent implements OnInit {
  cars : Car[] = [];
  errorMessage:string;

  constructor(private carService : CarService) { }

    ngOnInit(): void {
      this.getCar2Compare();
    }

    getCar2Compare() : void {
        this.carService.getCars().subscribe(p => this.cars = p);
    }


    setVote(id : number) : void {
      if(id == 1){
        alert("Het enige goede antwoord!");
      }
      else
      {
        alert("DAS FOUT!");
      }

      /*
        this.carService.setVote(this.cars[0].ID, this.cars[1].ID, id)
        .subscribe(error =>  this.errorMessage = <any>error);*/
    }

}
