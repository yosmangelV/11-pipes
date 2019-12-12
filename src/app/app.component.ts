import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Yosmangel';
  name2 = 'yosmANgel gaBRiel aDAMes pIÑERo';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a = 0.234;
  salary = 1234.5;
  heroe = {
    name : 'Logan',
    key : 'Wolverine',
    age : 500,
    address : {
      street : 'Primera',
      number : '19'
    }
  };

  valorDePromesa = new Promise ( (resolve, reject) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

  active = true;
}
