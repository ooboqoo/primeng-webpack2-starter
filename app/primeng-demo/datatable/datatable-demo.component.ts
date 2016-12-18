import { Component, OnInit }      from '@angular/core';

import { Car }        from './car';
import { CarService } from './car.service';

@Component({
  selector: 'p-datatable-demo',
  templateUrl: 'datatable-demo.component.html',
  providers: [CarService]
})
export class DatatableDemoComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}