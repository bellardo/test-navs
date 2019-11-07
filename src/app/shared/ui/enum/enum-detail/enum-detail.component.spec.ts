import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumDetailComponent } from './enum-detail.component';

describe('EnumDetailComponent', () => {
  let component: EnumDetailComponent;
  let fixture: ComponentFixture<EnumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
