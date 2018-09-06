import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Car } from '../../models/car';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  cars:any;

  constructor(public http: HttpClient) {
    this.cars = new Array();
    this.cars.push(
      {model:'Toyota Corolla',price:8000,color:'blue',checked:false},
      {model:'Nissan Pathfinder',price:12000,color:'blue',checked:true},
      {model:'Kia Rio',price:8000,color:'green',checked:false},
      {model:'Lexus',price:9000,color:'red',checked:false},
      {model:'Tesla',price:7000,color:'green',checked:false},
      {model:'Hyundai',price:15000,color:'violet',checked:false},
    );
  }

  filterItems(searchTerm){
    return this.cars.filter((car) => {
      // return car.model.toLowerCase().indexOf(
      //   searchTerm.toLowerCase()) > -1;
      return car.model.toLowerCase().
        indexOf(searchTerm.toLowerCase()) > -1 ||
          car.color.toLowerCase().
            indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}