export interface Meetup {
  id: number;
  title: string;
  talker: string;
  date: string;
  hour: string;
}

export interface User {
  id: number;
  name: string;
  password: string;
  meetups: number[];
}


export interface ValidateLoginResponse {
  success: boolean;
}
