import { Component } from '@angular/core';

import { DragDropPage } from '../dragdrop/dragdrop';
import { ElementosPage } from '../elementos/elementos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DragDropPage;
  tab3Root = ElementosPage;

  constructor() {

  }
}
