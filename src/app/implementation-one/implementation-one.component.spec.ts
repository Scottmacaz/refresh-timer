import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationOneComponent } from './implementation-one.component';

describe('ImplementationOneComponent', () => {
  let component: ImplementationOneComponent;
  let fixture: ComponentFixture<ImplementationOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementationOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
