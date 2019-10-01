import { Component } from '@angular/core';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( public tareasService: TareasService ) {}

}
