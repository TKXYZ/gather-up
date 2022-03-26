import {Event} from './event';

describe('Event', () => {
  it('should create an instance', () => {
    expect(new Event(1, "EventName", "EventDescription", "EventLocation", "EventDateTime", "EventType", "UserEmail")).toBeTruthy();
  });
});
