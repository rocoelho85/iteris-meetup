import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupItemComponent } from './meetup-item.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { MeetupService } from 'src/app/services/meetup.service';
import { of } from 'rxjs';
import { Meetup } from 'src/app/app-meetup.types';

describe('MeetupItemComponent', () => {
  let component: MeetupItemComponent;
  let fixture: ComponentFixture<MeetupItemComponent>;

  beforeEach(async(() => {

    const userService = jasmine.createSpyObj<UserService>(['getUser', 'removeUser']);
    const meetupService = jasmine.createSpyObj<MeetupService>(['subscribeUser', 'unsubscribeUser']);

    TestBed.configureTestingModule({
      declarations: [MeetupItemComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: UserService, useValue: userService },
        { provide: MeetupService, useValue: meetupService },
      ]
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

  it('deve apresentar nova cor quando usuário se inscreve', async (done) => {

    // given 
    const expectedMeetup: Meetup = {
      id: 1,
      title: 'Dojo de testes unitários',
      date: '27/11/2019',
      hour: '19:00',
      talker: 'Rodrigo Coelho',
      subscribed: [765]
    };
    const userService: jasmine.SpyObj<UserService> = TestBed.get(UserService);
    const meetupService: jasmine.SpyObj<MeetupService> = TestBed.get(MeetupService);

    meetupService.subscribeUser.and.returnValue(of(expectedMeetup));
    userService.getUser.and.returnValue({
      id: 765,
      name: 'Rodrigo',
      email: 'rodrigo.oliveira@iteris.com.br'
    });

    component.meetup = expectedMeetup;
    component.ngOnInit();

    // when 
    component.subscribe();

    // then
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        const divMeetup = fixture.debugElement.nativeElement.querySelector('.meetup--registered');

        expect(divMeetup).toBeTruthy();
        expect(component.userRegistered).toBe(true);

        done();
      });
  });

  it('dado um meetup apresentar o titulo em uma tag h5', () => {
    // given 
    const expectedMeetup: Meetup = {
      id: 1,
      title: 'Dojo de testes unitários',
      date: '27/11/2019',
      hour: '19:00',
      talker: 'Rodrigo Coelho',
      subscribed: []
    };

    component.meetup = expectedMeetup;

    fixture.detectChanges();
    const h5Elem = fixture.debugElement.nativeElement.querySelector('h5');

    expect(h5Elem).toBeTruthy();
    expect(h5Elem.innerHTML).toBe('Dojo de testes unitários');
  
  });

});
