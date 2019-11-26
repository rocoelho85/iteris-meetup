import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupItemComponent } from './meetup-item.component';

describe('MeetupItemComponent', () => {
  let component: MeetupItemComponent;
  let fixture: ComponentFixture<MeetupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
