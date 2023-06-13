import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    Renderer,
    HostListener,
    HostBinding
} from '@angular/core';

@Component({
    selector: 'ui-option',
    templateUrl: './ui-option.component.html',
    styleUrls: ['./ui-option.component.scss'],
})

export class UiOptionComponent implements OnInit {
    private _active = false;

    @Input() value: any;
    @Input() selected: boolean;

    @Output() select = new EventEmitter<UiOptionComponent>();
    @Output() hover = new EventEmitter<UiOptionComponent>();
    @Output() unSelect = new EventEmitter();
    @Output() selectNext = new EventEmitter<UiOptionComponent>();
    @Output() selectPrev = new EventEmitter<UiOptionComponent>();

    // @HostBinding('class.option--active') active;

    // get active(): boolean {
    //     return this._active;
    // }

    set active(active: boolean) {
        this._active = active;
    }

    constructor(
        public element: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnInit() {
        this.selected = false;
    }

    onKeydown(event: any): void {
        console.log('option', event);
        if (event.keyCode === 32) {
            this.onSelect();
        } else if (event.keyCode === 40) {
            this.selectNext.emit(this);
        } else if (event.keyCode === 38) {
            this.selectPrev.emit(this);
        }
    }

    onSelect(): void {
        this.selected = true;
        this.select.emit(this);
    }

}
