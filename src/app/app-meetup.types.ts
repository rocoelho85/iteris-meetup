export interface Meetup {
  id: number;
  title: string;
  talker: string;
  date: string;
  hour: string;
  subscribed: number[];
}

export interface User {
  id: number;
  name: string;
  email: string;
}
