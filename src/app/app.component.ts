import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BaseService } from './services/base.service';
import { FipeService } from './services/fipe.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [BaseService, FipeService]
})
export class AppComponent {
  title = 'app works!';
}
