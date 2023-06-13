import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOptionComponent } from './ui-option.component';

describe('UiOptionComponent', () => {
  let component: UiOptionComponent;
  let fixture: ComponentFixture<UiOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
