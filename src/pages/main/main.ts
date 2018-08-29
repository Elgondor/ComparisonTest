import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car } from '../../models/car';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  cars:Car[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    
    
  }



}
