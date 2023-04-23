import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{
  title = 'sheldrick';
  estatePanelOpenState = false;
  dtiPanelOpenState = false;
  overview: boolean = true;
  details: boolean = false;



  netWorth:number = 0;
  portfolioMix:number = 0;
  cashFlow:number = 0;
  debtToIncomeRation:number = 0;
  netWorthRatio:number = 0;





  constructor(private fb:FormBuilder) {
  }

  inputform = this.fb.group({

    age:['', [Validators.required, Validators.min(0)]],
    creditScore:['', Validators.required],
    debt:['', [Validators.required, Validators.min(0)]],
    income:['', [Validators.required, Validators.min(0)]],
    assets:['', [Validators.required, Validators.min(0)]],
    liabilities:['', [Validators.required, Validators.min(0)]],
    finGoal: ['', Validators.required],
    will: ['', Validators.required],
    house: ['', Validators.required],
    lifeIns: ['', Validators.required],
    savings: ['', Validators.required],
    poa: ['', Validators.required],
    trust: ['', Validators.required],
    stocks: ['', Validators.required],
    netWorthRatio: ['', Validators.required],
    dtiRatio: ['', Validators.required],



  });

  get formControls(){
    return this.inputform.controls;
  }

  get formValues(){
    return this.inputform.value;
  }


  calculate() {

    // IF ERROR OCCURS EXIT THE CALCULATE FUNCTION
    if(this.inputform.invalid) {
      this.estatePanelOpenState = true;
      this.dtiPanelOpenState = true;
      this.inputform.setErrors({ ...this.inputform.errors });
      return;
    }


  }






  ngAfterViewInit() {
    //this.expansionPanel?.open();
  }



  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false


}
