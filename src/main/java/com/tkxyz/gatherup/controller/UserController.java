package com.tkxyz.gatherup.controller;

import com.tkxyz.gatherup.model.User;
import com.tkxyz.gatherup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {

	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	// CREATE
	@PostMapping("/user/createUser") // http://localhost:9999/user/createUser
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}

	// READ
	@GetMapping("/user/getUsers") // http://localhost:9999/user/getUsers
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@GetMapping("/user/getUserById/{id}") // http://localhost:9999/user/getUserById/{id}
	public User getUserById(@PathVariable("id") int id) {
		return userService.getUserById(id);
	}

	@GetMapping("/user/getUserByEmail/{email}") // http://localhost:9999/user/getUserByEmail/{email}
	public User getUserByEmail(@PathVariable("email") String email) {
		return userService.getUserByEmail(email);
	}

	// UPDATE
	@PutMapping("/user/updateUser") // http://localhost:9999/user/updateUser
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}

	// DELETE
	@DeleteMapping("/user/deleteUserById/{id}") // http://localhost:9999/user/deleteUserById/{id}
	public void deleteUserById(@PathVariable("id") int id) {
		userService.deleteUserById(id);
	}
}
