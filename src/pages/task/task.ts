import {LISTS } from './../../mocks/list.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  name: string;
  lists=LISTS;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.name=this.navParams.get("variable");
  }


  ionViewDidLoad() {
   
    console.log('ionViewDidLoad TaskPage');
  }
  addTask(){
    this.navCtrl.push("AddTaskPage");
  }

home(){
    this.navCtrl.push("HomePage");
  }
}


