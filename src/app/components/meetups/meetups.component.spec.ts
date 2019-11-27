import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupsComponent } from './meetups.component';
import { MeetupItemComponent } from './meetup-item/meetup-item.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { MeetupService } from 'src/app/services/meetup.service';
import { Meetup } from 'src/app/app-meetup.types';
import { of } from 'rxjs';

describe('MeetupsComponent', () => {
  let component: MeetupsComponent;

  beforeEach(async(() => {

    const userService = jasmine.createSpyObj<UserService>(['getUser', 'removeUser']);
    const meetupService = jasmine.createSpyObj<MeetupService>(['listMeetups']);

    

    TestBed.configureTestingModule({
      providers: [
        MeetupsComponent,
        { provide: UserService, useValue: userService },
        { provide: MeetupService, useValue: meetupService },
      ]
    });
  }));

  beforeEach(() => {
    component = TestBed.get(MeetupsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve listar meetups ao inicializar ', () => {

    // given
    const meetupService: jasmine.SpyObj<MeetupService> = TestBed.get(MeetupService);
    const meetups: Meetup[] = [{
      id: 1,
      title: 'Dojo de testes unitários',
      date: '27/11/2019',
      hour: '19:00',
      talker: 'Rodrigo Coelho',
      subscribed: []
    }];

    meetupService.listMeetups.and.returnValue(of(meetups));

    // when 
    component.ngOnInit();

    // then
    expect(component.meetups).toBeTruthy();
    expect(component.meetups.length).toBeGreaterThan(0);

  });

  it('deve obter usuário ao inicializar', () => {

    // given
    const userService: jasmine.SpyObj<UserService> = TestBed.get(UserService);
    const meetupService: jasmine.SpyObj<MeetupService> = TestBed.get(MeetupService);

    meetupService.listMeetups.and.returnValue(of([]));
    userService.getUser.and.returnValue({
      id: 765,
      name: 'Rodrigo',
      email: 'rodrigo.oliveira@iteris.com.br'
    });

    // when 
    component.ngOnInit();

    // then 
    expect(component.user).toBeTruthy();
    expect(component.user.name).toBe('Rodrigo');

  });

  it('deve remover usuário quando efetuar logout', () => {
    // given
    const userService: jasmine.SpyObj<UserService> = TestBed.get(UserService);

    // when
    component.logout();

    // then
    expect(userService.removeUser).toHaveBeenCalledTimes(1);

  });



});
