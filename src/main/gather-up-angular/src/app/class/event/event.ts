export class Event {
  id: number; // PK
  name: string;
  description: string;
  location: string;
  dateTime: string;
  type: string;
  email: string; // FK to associate Event with User

  constructor(id: number, name: string, description: string, location: string, dateTime: string, type: string, email: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.dateTime = dateTime;
    this.type = type;
    this.email = email;
  }
}
