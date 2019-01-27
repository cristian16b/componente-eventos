//importo los input,output y evento
import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  segundo=0;
  @Input() inicio;
  //sintaxis para definir un evento
  //comunico el componente padre con el hijo
  //el padre llama al metodo multiplo10 definido en el componente hijo
  @Output() multiplo10 = new EventEmitter();

  //constructores deben ser simples, setear valores por defaUlt
  // NO USAR O REFERENCIAR A @INPUT -> ERROR
  constructor() { }

  //ver ref: http://www.enrique7mc.com/2017/04/diferencia-entre-constructor-y-ngoninit-en-angular-2/
  //basicamente el ngOnInit() se usa para inicializaciones complejas y obtener propiedades ingresadas
  //con los @Input
  ngOnInit() 
  {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0)
      //
        this.multiplo10.emit(this.segundo);
    }, 1000);
  }

}
