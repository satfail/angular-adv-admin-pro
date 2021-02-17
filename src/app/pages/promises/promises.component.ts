import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject) => {

    //   if(false){
    //     resolve('Hola Mundo');
    //   }else{
    //     reject('Esto es un error, lanzado con reject');
    //   }
    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje)
    // }).catch(error => {
    //   console.log('Error en la promesa', error);
    // })

    // console.log('Fin del Init');

    this.getUsers().then(usuarios => console.log(usuarios));
  }

  getUsers(){

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then(body => resolve(body.data));
    });
    return promesa;
  }

}
