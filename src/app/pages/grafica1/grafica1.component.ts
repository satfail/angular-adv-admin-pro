import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  titleGr1 : string = "Ventas";
  labelsGr2 : string[] = ['Download Expenses', 'In-Store Expenses', 'Mail-Order Expenses']
  data = [
    [200, 50, 400],
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
