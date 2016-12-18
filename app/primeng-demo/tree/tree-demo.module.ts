import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { GrowlModule, ContextMenuModule, ButtonModule, TreeModule } from 'primeng/primeng';
import { NodeService }        from './tree-demo.service';
import { TreeDemoComponent }  from './tree-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // primeng
    TreeModule,
    GrowlModule,
    ContextMenuModule,
    ButtonModule,
  ],
  declarations: [
    TreeDemoComponent,
  ],
  exports: [
    TreeDemoComponent,
  ],
  providers: [ NodeService ],
})
export class TreeDemoModule {  }
