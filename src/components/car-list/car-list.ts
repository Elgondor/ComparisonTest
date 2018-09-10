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
  @Input() searching: any;
  @Input() pagesNumber: any;
  @Output() eventComparisonList = new EventEmitter();
  @Output() eventInfiniteScroll = new EventEmitter();
  comparisonList:Car[];

  page:number;

  constructor() {
    this.comparisonList = new Array();
    this.page=2;
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.eventInfiniteScroll.emit(this.page);
      this.page++;
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);

    if(this.page===this.pagesNumber){
      infiniteScroll.enable(false);
    }
  }

}
