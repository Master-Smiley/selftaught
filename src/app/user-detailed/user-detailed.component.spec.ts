import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailedComponent } from './user-detailed.component';

describe('UserDetailedComponent', () => {
  let component: UserDetailedComponent;
  let fixture: ComponentFixture<UserDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
