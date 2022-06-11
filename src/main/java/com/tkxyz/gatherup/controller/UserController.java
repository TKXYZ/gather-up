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

import com.tkxyz.gatherup.model.User;
import com.tkxyz.gatherup.service.UserService;

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
