import { Component } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sheldrick';
  panelOpenState = false;
  selected:number =  650;


  constructor(private fb:FormBuilder) {
  }

  inputform = this.fb.group({

    age:[25, Validators.required],
    creditScore:[620, Validators.required],
    debt:[560, Validators.required],
    income:[1150, Validators.required],
    assets:[455, Validators.required],
    liabilities:[22, Validators.required],



  });
  finGoal: any;
  will: any;
  house: any;
  lifeIns: any;
  savings: any;
  poa: any;
  trust: any;
  stocks: any;
  dtiRatio: any;


  formatLabel(value: number): string {
    return `${value}`;
  }

}
