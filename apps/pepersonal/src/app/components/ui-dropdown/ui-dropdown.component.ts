import {
    Component,
    OnInit,
    AfterContentInit,
    Input,
    Output,
    EventEmitter,
    HostListener,
    ElementRef,
    ContentChildren,
    QueryList,
    Renderer2
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UiOptionComponent } from './ui-option/ui-option.component';

import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'ui-dropdown',
    templateUrl: './ui-dropdown.component.html',
    styleUrls: ['./ui-dropdown.component.scss']
})

export class UiDropdownComponent implements AfterContentInit {
    @Input() label: string;
    @Input() placeholder: string;

    @Input()
    get disabled() {
        return this._disabled;
    }
    set disabled(value: any) {
        this._disabled = value;
    }

    @Input()
    get required() {
        return this._required;
    }
    set required(value: boolean) {
        this._required = value;
    }

    @Output() change = new EventEmitter<any>();

    @ContentChildren(UiOptionComponent) options: QueryList<UiOptionComponent>;

    public isDropdownVisible: boolean;
    public selectedOption: UiOptionComponent;

    private _activeOption: UiOptionComponent;

    private _required: boolean;
    private _disabled: boolean;
    private optionsArray: Array<UiOptionComponent>;

    private optionSubscription: Subscription;

    @HostListener('document:click', ['$event']) clickOutsideComponent($event: any): void {
        if (!this.element.nativeElement.contains(event.target)) {
            this.isDropdownVisible = false;
        }
    }

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngAfterContentInit() {
        console.log(this.options)
        this.optionsArray = this.getOptionsAsArray(this.options);
        this.options.changes.startWith(null)
            .subscribe((options: Array<UiOptionComponent>) => {
                this._resetOptions();
                this.optionsArray = options;
            });
    }

    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
        if (!this.selectedOption) {
            this.renderer.setProperty(this.options.first, 'active', true);
            this._activeOption = this.options.first;
        }
        console.log(this.options);
    }

    _handleKeydown(event) {
        if (this.isDropdownVisible && event.key === 'ArrowDown') {

        }
    }

    writeValue(value: any) {
        if (value !== undefined && value !== null && value.length > 0) {
            const option = this.getOptionByValue(value);
            this.selectOption(option);
        } else {
            this.deselectOptions();
        }
    }

    private _resetOptions(): void {
        this._dropSubscriptions();
        this._listenToOptions();
    }

    private _dropSubscriptions(): void {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    }

    private _listenToOptions(): void {
        this.optionSubscription = this.optionSelectionChanges
            .subscribe((event: any) => {
                this.onOptionSelectListener(event);
            })
    }

    get optionSelectionChanges(): any {
        return Observable.merge(...this.options.map(option => option.select));
    }

    private onOptionSelectListener(option: UiOptionComponent) {
        this.selectOption(option);
        this.isDropdownVisible = false;
    }

    private getOptionsAsArray(query: QueryList<UiOptionComponent>) {
        return query.map(item => item);
    }

    private selectOption(selectedOption: UiOptionComponent) {
        this.deselectOptions();
        this.selectedOption = selectedOption;
        this.selectedOption.selected = true;
        this.emitValue(this.selectedOption.value);
    }

    private deselectOptions() {
        if (this.options) {
            this.options.forEach(option => option.selected = false);
        }
    }

    private emitValue(value: any): void {
        this.propagateChange(value);
        this.change.emit(value);
    }

    private propagateChange = (value: any) => {
        return;
    }

    private getOptionByValue(value: any): UiOptionComponent {
        return this.options.filter(option => option.value === value)[0];
    }
}
