import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader=false
  constructor() { }

  showLoader(){
    this.loader=true
  }

  hideLoader(){
    this.loader=false
  }
}
