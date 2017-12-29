import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlickrProvider {
  getApiUrl : string = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=7024ca438a66865b2f7f9f0643327e25&user_id=152375700%40N05&format=json&nojsoncallback=1&auth_token=72157690862629184-e6805d1c4d93f143&api_sig=64e056c820b8796dbe1caa4c9a6f1955";    
  
  constructor(public http: Http) {
    console.log('Hello FlickrProvider Provider');
  }

  getPosts()
  {
    return this.http.get(this.getApiUrl)
    .map((res => res.json()));
  }  
}
