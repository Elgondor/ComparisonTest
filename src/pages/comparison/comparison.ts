import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car } from '../../models/car';

/**
 * Generated class for the ComparisonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comparison',
  templateUrl: 'comparison.html',
})
export class ComparisonPage {
  comparisonList:Car[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.comparisonList = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparisonPage');

    this.comparisonList = this.navParams.get('comparisonList');
    console.log(this.comparisonList);
  }

}
