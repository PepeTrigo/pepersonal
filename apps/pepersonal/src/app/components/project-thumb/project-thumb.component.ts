import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pt-project-thumb',
    templateUrl: './project-thumb.component.html',
    styleUrls: ['./project-thumb.component.scss']
})
export class ProjectThumbComponent implements OnInit {
    @Input() thumbData: any;

    constructor() {

    }

    ngOnInit() {
        console.log(this.thumbData);
    }

}
