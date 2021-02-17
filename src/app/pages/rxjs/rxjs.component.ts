import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';
import {filter, map, retry, take} from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {


  public intervalSubs : Subscription;

  constructor() {


    // this.$observableContador().pipe(
    //   retry(1)
    // ).
    // subscribe(
    //   valor => console.log('Subs',valor),
    //   error => console.warn('Error',error),
    //   () => console.info('Observador Terminado')
    // );

    // this.$observaleIntervalo().subscribe(
    //   (valor)=>{
    //     console.log(valor);
    //   }
    // )
    //Es lo mismo de lo de arriba pero simplificado
    //pasa por argumento el valor devuelto a la funcion interna
    this.intervalSubs = this.$observaleIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  $observaleIntervalo() : Observable<number>{
    return interval(500).pipe(
      //take(10),
      map( valor =>  valor + 1 ),
      filter( valor => valor%2 === 0),
    );
  }

  $observableContador(){
    let i = 0;
    return new Observable(observer => {

      const intervalo = setInterval(() => {
        ++i;
        if(i ===  7 ){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i === 2){
          observer.error('Se manda error');
        }
        observer.next(i);
      },1000)
    });

  }

}
