import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
// import { Car } from '../../models/car';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  cars:any;
  paginationCars:any;

  constructor(public http: HttpClient) {
    this.cars = new Array();
    this.paginationCars=new Array();
    this.cars.push(
      {model:'Toyota Corolla',price:8000,color:'blue',checked:false},
      {model:'Nissan Pathfinder',price:12000,color:'blue',checked:true},
      {model:'Kia Rio',price:8000,color:'green',checked:false},
      {model:'Lexus',price:9000,color:'red',checked:false},
      {model:'Tesla',price:7000,color:'green',checked:false},
      {model:'Hyundai',price:15000,color:'violet',checked:false},

      {model:'Mitsubishi',price:8000,color:'blue',checked:false},
      {model:'Ford Torino',price:12000,color:'blue',checked:true},
      {model:'Chevrolet',price:8000,color:'green',checked:false},
      {model:'Lexus NX',price:9000,color:'red',checked:false},
      {model:'Tesla model S',price:7000,color:'green',checked:false},
      {model:'Hyundai Tucson',price:15000,color:'violet',checked:false},

      {model:'Mitsubishi Autlande',price:8000,color:'blue',checked:false},
      {model:'Ford Mustang',price:12000,color:'blue',checked:true},
      {model:'Chevrolet Camaro',price:8000,color:'green',checked:false},
      {model:'Lexus LFA',price:9000,color:'red',checked:false},
      {model:'Tesla model X',price:7000,color:'green',checked:false},
      {model:'Hyundai i10',price:15000,color:'violet',checked:false},




      {model:'Toyota Rush',price:8000,color:'blue',checked:false},
      {model:'Nissan Jukke',price:12000,color:'blue',checked:true},
      {model:'Kia Sportage',price:8000,color:'green',checked:false},
      {model:'Lexus GX',price:9000,color:'red',checked:false},
      {model:'Tesla Roadster',price:7000,color:'green',checked:false},
      {model:'Hyundai i30',price:15000,color:'violet',checked:false},

      {model:'Mitsubishi ASX',price:8000,color:'blue',checked:false},
      {model:'Ford Torino GT',price:12000,color:'blue',checked:true},
      {model:'Chevrolet Impala',price:8000,color:'green',checked:false},
      {model:'Lexus IS300',price:9000,color:'red',checked:false},
      {model:'Tesla model 3',price:7000,color:'green',checked:false},
      {model:'Hyundai Elantra',price:15000,color:'violet',checked:false},

      {model:'Mitsubishi Lancer',price:8000,color:'blue',checked:false},
      {model:'Ford Taurus',price:12000,color:'blue',checked:true},
      {model:'Chevrolet Cobalt',price:8000,color:'green',checked:false},
      {model:'Lexus SUV',price:9000,color:'red',checked:false},
      {model:'Hyundai Genesis',price:15000,color:'violet',checked:false},
    );
  }

  getPagesNumber(){
    return Math.ceil(this.cars.length / 15);
  }

  paginationData(page:number){
    this.paginationCars=new Array();
    let length = this.cars.length;

    if((page*15)<this.cars.length){
      if(page==1){
        for(let i=0;i<15;i++){
          this.paginationCars.push(this.cars[i]);
        }
      }else{
        for(let i=0;i<15;i++){
          this.paginationCars.push(this.cars[i+(((page-1)*15))]);
        }
      }
    }else{
      for(let i=(((page-1)*15));i<this.cars.length;i++){
        this.paginationCars.push(this.cars[i]);
      }
    }

    return this.paginationCars;
  }

  filterItems(searchTerm){
    return this.cars.filter((car) => {
      return car.model.toLowerCase().
        indexOf(searchTerm.toLowerCase()) > -1 ||
          car.color.toLowerCase().
            indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
