import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']

})
export class HomePage {
  height: number;
  weight: number;
  bmi: number;
  message: string;

  constructor(public navCtrl: NavController) {

  }

  calculateBMI () {

    this.bmi = this.weight/(this.height * this.height)

    this.bmi = parseFloat(this.bmi.toFixed(2))

    if (this.bmi < 18.5){
      this.message = "which is underweight";
    } else if (this.bmi >= 18.5 && this.bmi < 24.5){
      this.message = "which is normal :)";
    } else if (this.bmi >= 24.5 && this.bmi < 30){
      this.message = "which is overweight";
    } else {
      this.message = "which is obese";
    }
  }

}
