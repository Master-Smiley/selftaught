import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideResourceComponent } from './guide-resource.component';

describe('GuideResourceComponent', () => {
  let component: GuideResourceComponent;
  let fixture: ComponentFixture<GuideResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
