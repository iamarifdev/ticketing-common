import { Subjects } from './subjects';

export interface ExpirationCompleteEvent extends Event {
  readonly subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}