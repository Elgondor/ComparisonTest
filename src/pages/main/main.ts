import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events} from 'ionic-angular';
import { Car } from '../../models/car';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';

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
  searchControl: FormControl;

  comparisonList:Car[];
  
  searching: any;

  pagesNumber:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
              private dataService:DataProvider) {
    this.cars = new Array();
    this.myInput = '';
    this.pagesNumber=0;
    this.searchControl = new FormControl();
    this.searching = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.pagesNumber=this.dataService.getPagesNumber();
    this.cars = this.dataService.paginationData(1);
    
    this.searchControl.valueChanges.debounceTime(700).subscribe(
      search  => {
        this.searching = false;
        this.setFilteredItems();
      }
    );
  }

  onSearchInput(){
    this.searching = true;
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

  getInfiniteScrollList(page){
    this.cars = this.cars.concat(this.dataService.paginationData(page));
    
  }


}
