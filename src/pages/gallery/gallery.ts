import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlickrProvider } from '../../providers/flickr/flickr';

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  photo:any;
  
  constructor(public navCtrl: NavController, public flickrProvider: FlickrProvider) {
    this.photo = {photos: {photo:[]}};
    this.getPosts();
    console.log("Getting posts");
  }

  getPosts() {
    this.flickrProvider.getPosts().subscribe((data)=>{
      this.photo = data;
      console.log(data);
  });
  }
}
