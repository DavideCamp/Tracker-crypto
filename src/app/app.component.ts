import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracker-crypto';
  selectedCurrency : string = "INR";

  constructor() {
    
  }
  sendCurrency(event :string){
    console.log(event)
  }
}
