import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {
  cantidad1=0;
  cantidad2=0
  resultado=0
  constructor() { }

  ngOnInit(): void {
  }
  sumar(){
    let res = this.resultado =(this.cantidad1 * this.cantidad2);
    console.log(res);
  }

}
