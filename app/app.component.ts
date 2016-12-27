import { Component } from '@angular/core';
import { MenuItem }  from 'primeng/primeng';

@Component({
  selector: 'my-app',
  template: `
    <p-menubar [model]="items"></p-menubar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'PrimeNG Demo', disabled: true },
      { label: 'Tree',  routerLink: ['primeng', 'tree']  },
      { label: 'Data Table',  routerLink: ['primeng', 'datatable']  },
      { label: 'Charts',  routerLink: ['primeng', 'charts']  },
    ];
  }
}
