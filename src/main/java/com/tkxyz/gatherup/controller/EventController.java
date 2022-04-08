package com.tkxyz.gatherup.controller;

import com.tkxyz.gatherup.dao.EventDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class EventController {

	private final EventDao eventDao;

	@Autowired
	public EventController(EventDao eventDao) {
		this.eventDao = eventDao;
	}
}
