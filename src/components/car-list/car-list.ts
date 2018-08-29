import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Car } from '../../models/car';
/**
 * Generated class for the CarListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'car-list',
  templateUrl: 'car-list.html'
})
export class CarListComponent implements OnInit{
  @Input() cars: Car[];
  @Output() eventComparisonList = new EventEmitter();
  comparisonList:Car[];

  constructor() {
    this.comparisonList = new Array();
    
  }

  ngOnInit(){
    this.eventComparisonList.emit(this.comparisonList);
    this.addToComparisonList();

    console.log(this.comparisonList);
  }

  addToCarComparisonList(car:Car){
    if(car.checked){
      this.comparisonList.push(car);
    }else{
      this.comparisonList = new Array();
      this.addToComparisonList();
    }
    this.eventComparisonList.emit(this.comparisonList);
    console.log(this.comparisonList);
  }

  addToComparisonList(){
    this.cars.forEach(car => {
      if(car.checked){
        this.comparisonList.push(car);
      }
    });
  }

}
