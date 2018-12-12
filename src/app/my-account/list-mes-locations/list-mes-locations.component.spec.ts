import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesLocationsComponent } from './list-mes-locations.component';

describe('ListMesLocationsComponent', () => {
  let component: ListMesLocationsComponent;
  let fixture: ComponentFixture<ListMesLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMesLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMesLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
