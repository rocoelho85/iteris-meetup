import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupItemComponent } from './meetup-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('MeetupItemComponent', () => {
  let component: MeetupItemComponent;
  let fixture: ComponentFixture<MeetupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupItemComponent ],
      imports: [HttpClientModule]
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
