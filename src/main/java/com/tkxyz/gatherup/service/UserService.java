package com.tkxyz.gatherup.service;

import java.util.List;
import java.util.Optional;

import com.tkxyz.gatherup.dao.UserDao;
import com.tkxyz.gatherup.model.User;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserDao userDao;

  // Log4j 2
  private static final Logger logger = LogManager.getLogger();

  // CREATE
  public User createUser(User user) {
    if (getUserByEmail(user.getEmail()) == null) {
      userDao.save(user);
      logger.info("Successfully saved user: " + user.toString());
    } else {
      logger.error("User by that email already exists.");
    }
    return null;
  }

  // READ
  public List<User> getUsers() {
    return userDao.findAll();
  }

  public User getUserById(int id) {
    Optional<User> user = userDao.findById(id);
    return user.get();
  }

  public User getUserByEmail(String email) {
    List<User> userList = userDao.findAll();
    for (User user : userList) {
      if (user.getEmail().equals(email)) {
        return user;
      }
    }
    return null;
  }

  // UPDATE
  public User updateUser(User user) {
    logger.info("Successfully updated user: " + user.toString());
    return userDao.save(user);
  }

  // DELETE
  public void deleteUserById(int id) {
    logger.info("Successfully deleted user: " + getUserById(id).getFirstName() + " " + getUserById(id).getLastName());
    userDao.deleteById(id);
  }
}
