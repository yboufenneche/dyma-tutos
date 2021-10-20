import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyma-tutos';
  // ngClass
  public color = '';

  // ngFor
  public users: Array<{nom:string}> =[
    {nom: "Yassine"},
    {nom: "Anissa"},
    {nom: "Sadja"},
    {nom: "Israa"}
  ];
}
