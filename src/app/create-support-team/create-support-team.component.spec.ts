import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupportTeamComponent } from './create-support-team.component';

describe('CreateSupportTeamComponent', () => {
  let component: CreateSupportTeamComponent;
  let fixture: ComponentFixture<CreateSupportTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupportTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupportTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
