import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThumbComponent } from './project-thumb.component';

describe('ProjectThumbComponent', () => {
  let component: ProjectThumbComponent;
  let fixture: ComponentFixture<ProjectThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
