package com.tkxyz.gatherup.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tkxyz.gatherup.model.Event;
import com.tkxyz.gatherup.service.EventService;

@CrossOrigin
@RestController
public class EventController {

  private final EventService eventService;

  @Autowired
  public EventController(EventService eventService) {
    this.eventService = eventService;
  }

  // CREATE
  @PostMapping("/event/createEvent") // http://localhost:9999/event/createEvent
  public Event createEvent(@RequestBody Event event) {
    return eventService.createEvent(event);
  }

  // READ
  @GetMapping("/event/getEvents") // http://localhost:9999/event/getEvents
  public List<Event> getEvents() {
    return eventService.getEvents();
  }

  @GetMapping("/event/getEventById/{id}") // http://localhost:9999/event/getEventById/{id}
  public Event getEventById(@PathVariable("id") int id) {
    return eventService.getEventById(id);
  }

  @GetMapping("/event/getEventByTitle/{title}") // http://localhost:9999/event/getEventByTitle/{title}
  public Event getEventByTitle(@PathVariable("title") String title) {
    return eventService.getEventByTitle(title);
  }

  @GetMapping("/event/getEventByUserId/{id}") // http://localhost:9999/event/getEventByUserId/{id}
  public Event getEventByUserId(@PathVariable("id") int id) {
    return eventService.getEventByUserId(id);
  }

  // UPDATE
  @PutMapping("/event/updateEvent") // http://localhost:9999/event/updateEvent
  public Event updateEvent(@RequestBody Event event) {
    return eventService.updateEvent(event);
  }

  // DELETE
  @DeleteMapping("/event/deleteEventById/{id}") // http://localhost:9999/event/deleteEventById/{id}
  public void deleteEventById(@PathVariable("id") int id) {
    eventService.deleteEventById(id);
  }
}
