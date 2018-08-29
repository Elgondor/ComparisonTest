import { Component,Input,OnInit } from '@angular/core';

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
  @Input() cars: any[];

  comparisonList:any[];

  constructor() {
    this.comparisonList = new Array();
  }

  ngOnInit(){
    this.addToComparisonList();

    console.log(this.comparisonList);
  }

  addToCarComparisonList(car:any){
    if(car.checked){
      this.comparisonList.push(car);
    }else{
      this.comparisonList = new Array();
      this.addToComparisonList();
    }

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
