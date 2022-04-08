package com.tkxyz.gatherup.controller;

import com.tkxyz.gatherup.model.Event;
import com.tkxyz.gatherup.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
		return null;
	}

	// READ
	@GetMapping("/event/getEvents") // http://localhost:9999/event/getEvents
	public List<Event> getEvents() {
		return null;
	}

	@GetMapping("/event/getEventById/{id}") // http://localhost:9999/event/getEventById/{id}
	public Event getEventById(@PathVariable("id") int id) {
		return null;
	}

	// UPDATE
	@PutMapping("/event/updateEvent") // http://localhost:9999/event/updateEvent
	public Event updateEvent(@RequestBody Event event) {
		return null;
	}

	// DELETE
	@DeleteMapping("/event/deleteEventById/{id}") // http://localhost:9999/event/deleteEventById/{id}
	public void deleteEventById(@PathVariable("id") int id) {

	}
}
