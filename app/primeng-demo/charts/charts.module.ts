import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ChartModule }   from 'primeng/primeng';

import { BarDemoComponent }        from './bar-demo.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],

  declarations: [
    BarDemoComponent,
  ],

  exports: [
    BarDemoComponent,
  ],

  providers: [  ],
})
export class ChartDemoModule {  }
