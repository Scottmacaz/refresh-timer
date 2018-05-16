import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationTwoComponent } from './implementation-two.component';

describe('ImplementationTwoComponent', () => {
  let component: ImplementationTwoComponent;
  let fixture: ComponentFixture<ImplementationTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementationTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
