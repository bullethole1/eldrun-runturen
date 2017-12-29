import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlickrProvider {
  getApiUrl : string = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=1a6c20cf1910df63f885f4a0a88d1a92&user_id=152375700%40N05&format=json&nojsoncallback=1&auth_token=72157661999649587-3f9f67ec41462874&api_sig=67815220dbe27c80a5972ccf8be9e9d0";    
  
  constructor(public http: Http) {
    console.log('Hello FlickrProvider Provider');
  }

  getPosts()
  {
    return this.http.get(this.getApiUrl)
    .map((res => res.json()));
  }  
}
