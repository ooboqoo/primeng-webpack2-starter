import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { MenubarModule }        from 'primeng/primeng';

import { AppComponent }         from './app.component';
import { PrimengModule }        from './primeng-demo/primeng.module';

import 'rxjs/add/operator/toPromise';

const appRoutes: Routes = [
  { path: '', redirectTo: 'primeng', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

    MenubarModule,
    PrimengModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {  }
