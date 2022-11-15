import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
  title = 'angular-unit-testing to do app';

  addNum(num1: number, num2: number): number{
    return num1 + num2
  }
}
