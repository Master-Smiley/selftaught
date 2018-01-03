import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboAndListComponent } from './jumbo-and-list.component';

describe('JumboAndListComponent', () => {
  let component: JumboAndListComponent;
  let fixture: ComponentFixture<JumboAndListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboAndListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
