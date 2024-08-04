import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter:number = 0
  message:string = ""

  constructor() {}

  presentAlert() {
    this.message = "Number cannot be less than 0"
  }

  incrementPressed() {
    this.message = ""
    this.counter++
  }

  decrementPressed() {
    if (this.counter == 1){
      this.presentAlert()
    }
    this.counter--
    
  }

  resetPressed() {
    this.counter = 0
  }

  

}
