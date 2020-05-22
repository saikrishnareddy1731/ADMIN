import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupportTeamComponent } from './view-support-team.component';

describe('ViewSupportTeamComponent', () => {
  let component: ViewSupportTeamComponent;
  let fixture: ComponentFixture<ViewSupportTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSupportTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupportTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
