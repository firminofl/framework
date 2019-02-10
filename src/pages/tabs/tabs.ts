import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ElementosPage } from '../elementos/elementos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ElementosPage;

  constructor() {

  }
}
