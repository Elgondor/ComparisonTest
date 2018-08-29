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
  text: string;

  comparisonList:any[];

  constructor() {
    this.comparisonList = new Array();
    console.log('Hello CarListComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(){
  }

  addToCarComparisonList(i:number){

    console.log(i);
  }

}
