import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';

import { TreeNode } from 'primeng/primeng';

@Injectable()
export class NodeService {

  constructor(private http: Http) { }

  getFiles() {
    return this.http.get('assets/primeng/tree/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.json().data);
  }

  getLazyFiles() {
    return this.http.get('assets/primeng/tree/files-lazy.json')
      .toPromise()
      .then(res => <TreeNode[]>res.json().data);
  }
}
