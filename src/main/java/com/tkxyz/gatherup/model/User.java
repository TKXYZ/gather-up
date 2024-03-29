package com.tkxyz.gatherup.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "user")
@Table
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id; // PK
	private String email;
	private String password;
	private String firstName;
	private String lastName;
	private String contact;

	public User() {
	}

	public User(int id, String email, String password, String firstName, String lastName, String contact) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contact = contact;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "User [contact=" + contact + ", email=" + email + ", firstName=" + firstName + ", id=" + id + ", lastName="
				+ lastName + ", password=" + password + "]";
	}

}
