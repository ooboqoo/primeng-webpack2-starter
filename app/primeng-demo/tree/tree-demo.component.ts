import { Component, OnInit, ViewChild }      from '@angular/core';
import { TreeNode, Message, Tree, MenuItem } from 'primeng/primeng';

import { NodeService } from './tree-demo.service';

@Component({
  selector: 'p-tree-demo',
  templateUrl: 'tree-demo.component.html',
  styles: [':host >>> .ui-tree .ui-tree-container {height: initial;}']
})
export class TreeDemoComponent implements OnInit {
    msgs: Message[];

    filesTree1: TreeNode[];
    filesTree2: TreeNode[];
    filesTree3: TreeNode[];

    lazyFiles: TreeNode[];

    selectedFile: TreeNode;
    selectedFile2: TreeNode;

    items: MenuItem[];

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.filesTree1 = files);
        this.nodeService.getFiles().then(files => this.filesTree2 = files);
        this.nodeService.getFiles().then(files => this.filesTree3 = files);

        this.nodeService.getLazyFiles().then(files => this.lazyFiles = files);

        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewFile(this.selectedFile2)},
            {label: 'Unselect', icon: 'fa-close', command: (event) => this.unselectFile()}
        ];
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

    nodeExpand(event) {
        if (event.node) {
            // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
        }
    }

    viewFile(file: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
    }

    unselectFile() {
        this.selectedFile2 = null;
    }
}