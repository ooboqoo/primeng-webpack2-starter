import { Routes } from '@angular/router';
import { PrimengComponent } from './primeng.component';

import { TreeDemoComponent } from './tree/tree-demo.component';
import { DatatableDemoComponent } from './datatable/datatable-demo.component';
import { BarDemoComponent } from './charts/bar-demo.component';

export const primengRoutes: Routes = [
  {
    path: 'primeng', component: PrimengComponent, children: [
      { path: 'datatable', component: DatatableDemoComponent },
      { path: 'tree', component: TreeDemoComponent },
      { path: 'charts', component: BarDemoComponent },
      { path: '', redirectTo: 'tree' },
    ]
  }
];
