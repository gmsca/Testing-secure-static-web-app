import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello secure 2 {{value}}</div>`,
})
export class AppComponent {
  value = 'GMS';
}
