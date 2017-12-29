import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RuneStoneInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rune-stone-info',
  templateUrl: 'rune-stone-info.html',
})
@Injectable()
export class RuneStoneInfoPage {
  text: string;
  location: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.infoPage();
  }

  infoPage() {
    let imgRef = this.navParams.get("img");
    // alert(imgRef);
    console.log(imgRef);
    let textRef = this.navParams.get("text");
  }

}
