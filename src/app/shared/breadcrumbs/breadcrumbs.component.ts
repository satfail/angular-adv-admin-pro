import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo? : string;
  public tituloSubs$ : Subscription;
  //Queremos cambiar el nombre del breadcrumns para ello se crea en el
  //routing module del pages en cada elemento de ruta un data, que se leerá
  //en la info de la ruta
  constructor(private router:Router) {

    this.tituloSubs$ = this.getDataRuta()
    .subscribe( data => {
      this.titulo = data.title;
      document.title = `Admin-Pro ${data.title}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getDataRuta() {
    return this.router.events
    .pipe(
      filter( (evento: any ) => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (event:ActivationEnd) => event.snapshot.data)
    )

  }
}
