package com.tkxyz.gatherup.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "event")
@Table
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id; // PK
	private String title;
	private String description;
	private String location;
	private String dateTime;
	private int userId; // FK associates Event to User

	public Event() {
	}

	public Event(int id, String title, String description, String location, String dateTime, int userId) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.location = location;
		this.dateTime = dateTime;
		this.userId = userId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Event [dateTime=" + dateTime + ", description=" + description + ", id=" + id + ", location=" + location
				+ ", title=" + title + ", userId=" + userId + "]";
	}

}
