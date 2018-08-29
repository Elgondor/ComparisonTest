import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events} from 'ionic-angular';
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
  myInput:String;
  cars:Car[];

  comparisonList:Car[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    this.cars = new Array();
    this.myInput = '';
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

  onInput(){
    this.events.publish('searchWord',this.myInput);
  }

  compareCars(){
    this.navCtrl.push('ComparisonPage',{
      comparisonList:this.comparisonList
    });
  }

  getComparisonList(eventComparisonList){
    this.comparisonList = eventComparisonList;
    console.log(this.comparisonList);
  }


}
