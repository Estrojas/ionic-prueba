import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title : string;
  subtitle: string;
  hero : string;
  heroes = ['Arturo','Lancelot','Steve','Kratos']
  
  constructor() {
    this.title = 'Hola Mundo';
    this.subtitle = 'Lore ipsum';
    this.hero = this.heroes[0];

  }

}
