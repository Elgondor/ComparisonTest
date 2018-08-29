import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { CarListComponent } from '../../components/car-list/car-list';

@NgModule({
  declarations: [
    MainPage,
    CarListComponent
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
