import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllUserComponent } from './list-all-user.component';

describe('ListAllUserComponent', () => {
  let component: ListAllUserComponent;
  let fixture: ComponentFixture<ListAllUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
