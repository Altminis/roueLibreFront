import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePopupComponent } from './annonce-popup.component';

describe('AnnoncePopupComponent', () => {
  let component: AnnoncePopupComponent;
  let fixture: ComponentFixture<AnnoncePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
