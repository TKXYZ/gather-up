export class Event {
  id: number;
  title: string;
  description: string;
  location: string;
  dateTime: string;
  type: string;
  userId: number; // FK associates Event to User

  constructor(id: number, title: string, description: string, location: string, dateTime: string, type: string, userId: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.location = location;
    this.dateTime = dateTime;
    this.type = type;
    this.userId = userId;
  }
}
