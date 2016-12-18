import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TreeDemoModule }      from './tree/tree-demo.module';
import { ChartDemoModule }     from './charts/charts.module';
import { DatatableDemoModule } from './datatable/datatable-demo.module';

import { PrimengComponent }  from './primeng.component';

import { primengRoutes } from './primeng.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(primengRoutes),  // forChild 返回的是更新路由定义后的 RouterModule: ModuleWithProviders

    TreeDemoModule,
    DatatableDemoModule,
    ChartDemoModule,
  ],
  declarations: [
    PrimengComponent,
  ],
  exports: [
    PrimengComponent
  ],
})
export class PrimengModule {  }
