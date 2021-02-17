import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  constructor() {

    const url:string = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    this.linkTheme!.setAttribute('href',url);

  }

  changeTheme(color:string){

    const url = `./assets/css/colors/${ color }.css`
    this.linkTheme!.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }


  checkCurrentTheme(){

    const linksLi: NodeListOf<Element>= document.querySelectorAll('.selector');

    linksLi.forEach(element => {
      //Working es quien lleva el tick
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currenTheme = this.linkTheme!.getAttribute('href');

      if(btnUrl === currenTheme){
        element.classList.add('working')
      }
    });
  }



}
