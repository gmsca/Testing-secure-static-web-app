import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello secure 4 {{value}}</div>`,
})
export class AppComponent {
  value = 'GMS';
}
