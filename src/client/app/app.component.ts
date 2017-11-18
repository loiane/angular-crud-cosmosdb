import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
  <nav class="navbar navbar-toggleable-md navbar-dark fixed-top bg-primary">
    <a style="min-width: 280px" class="navbar-brand" routerLink="/">
        Angular contacts on the cloud!
    </a>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`.container { padding-top: 60px; }`]
})
export class AppComponent { }
