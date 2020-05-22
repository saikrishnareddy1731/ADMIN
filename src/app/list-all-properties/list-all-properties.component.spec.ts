import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPropertiesComponent } from './list-all-properties.component';

describe('ListAllPropertiesComponent', () => {
  let component: ListAllPropertiesComponent;
  let fixture: ComponentFixture<ListAllPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
