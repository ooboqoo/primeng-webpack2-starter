// ES7 Polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';

// Angular2 Dependencies
import 'reflect-metadata/Reflect.js';  // webpack 的 extensions 设定貌似没有优先级顺序，随机的，然后 tsconfig 又配置不编译 node_module 下文件，然后就会时不时报找不到 Reflect.getMetadata
import 'zone.js/dist/zone.js';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators extensions
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

// Others
import 'chart.js/dist/Chart.bundle.min.js';  // PrimeNG 图表依赖包
