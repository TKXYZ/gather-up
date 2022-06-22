package com.tkxyz.gatherup.service;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.tkxyz.gatherup.dao.EventDao;
import com.tkxyz.gatherup.model.Event;

@Service
public class EventService {

	private final EventDao eventDao;

	// Constructor injection
	public EventService(EventDao eventDao) {
		this.eventDao = eventDao;
	}

	// Log4j 2
	private static final Logger logger = LogManager.getLogger();

	// CREATE
	public Event createEvent(Event event) {
		logger.info("Successfully created event: " + event);
		return eventDao.save(event);
	}

	// READ
	public List<Event> getEvents() {
		logger.info("Retrieving all events.");
		return eventDao.findAll();
	}

	public Event getEventById(int id) {
		logger.info("Retrieving event by id: " + id);
		Optional<Event> event = eventDao.findById(id);
		return event.get();
	}

	public Event getEventByTitle(String title) {
		logger.info("Retrieving event by title: " + title);
		List<Event> eventList = eventDao.findAll();
		for (Event event : eventList) {
			if (event.getTitle().equalsIgnoreCase(title)) {
				return event;
			}
		}
		return null;
	}

	public Event getEventByUserId(int id) {
		logger.info("Retrieving event by user id: " + id);
		List<Event> eventList = eventDao.findAll();
		for (Event event : eventList) {
			if (event.getUserId() == id) {
				return event;
			}
		}
		return null;
	}

	// UPDATE
	public Event updateEvent(Event event) {
		logger.info("Successfully updated event: " + event);
		return eventDao.save(event);
	}

	// DELETE
	public void deleteEventById(int id) {
		logger.info("Successfully deleted event: " + getEventById(id));
		eventDao.deleteById(id);
	}
}
