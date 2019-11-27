import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupsComponent } from './meetups.component';
import { MeetupItemComponent } from './meetup-item/meetup-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('MeetupsComponent', () => {
  let component: MeetupsComponent;
  let fixture: ComponentFixture<MeetupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupsComponent, MeetupItemComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
