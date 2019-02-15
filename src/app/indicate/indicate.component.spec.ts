import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateComponent } from './indicate.component';

describe('IndicateComponent', () => {
  let component: IndicateComponent;
  let fixture: ComponentFixture<IndicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
