import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaLocationComponent } from './ma-location.component';

describe('MaLocationComponent', () => {
  let component: MaLocationComponent;
  let fixture: ComponentFixture<MaLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
