import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events} from 'ionic-angular';
import { Car } from '../../models/car';
import { DataProvider } from '../../providers/data/data';

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
  // cars:Car[];
  cars:Car[];

  comparisonList:Car[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
              private dataService:DataProvider) {
    this.cars = new Array();
    this.myInput = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.setFilteredItems();
  }

  setFilteredItems(){
    this.cars = this.dataService.filterItems(this.myInput);
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
