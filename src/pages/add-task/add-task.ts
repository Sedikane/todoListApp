import { LISTS } from './../../mocks/list.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
task1:string;
task2:string;
task3:string;
task4:string;

  LISTS
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }
onClick(){
  LISTS.push({task1:this.task1,task2:this.task2,task3:this.task3,task4:this.task4})

  this.navCtrl.pop()
}

}
