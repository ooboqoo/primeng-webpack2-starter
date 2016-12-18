import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { DataTableModule } from 'primeng/primeng';
import { DatatableDemoComponent } from './datatable-demo.component';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
  ],
  declarations: [ DatatableDemoComponent ],
  exports:      [ DatatableDemoComponent ],
})
export class DatatableDemoModule {  }
