package com.tkxyz.gatherup.service;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tkxyz.gatherup.dao.UserDao;
import com.tkxyz.gatherup.model.User;

@Service
public class UserService {

	private final UserDao userDao;

	@Autowired
	public UserService(UserDao userDao) {
		this.userDao = userDao;
	}

	// Log4j 2
	private static final Logger logger = LogManager.getLogger();

	// CREATE
	public User createUser(User user) {
		if (getUserByEmail(user.getEmail()) == null) {
			userDao.save(user);
			logger.info("Successfully created user: " + user);
		} else {
			logger.error("User by that email already exists.");
		}
		return null;
	}

	// READ
	public List<User> getUsers() {
		logger.info("Retrieving all users.");
		return userDao.findAll();
	}

	public User getUserById(int id) {
		logger.info("Retrieving user by id: " + id);
		Optional<User> user = userDao.findById(id);
		return user.get();
	}

	public User getUserByEmail(String email) {
		logger.info("Retrieving user by email: " + email);
		List<User> userList = userDao.findAll();
		for (User user : userList) {
			if (user.getEmail().equalsIgnoreCase(email)) {
				return user;
			}
		}
		return null;
	}

	// UPDATE
	public User updateUser(User user) {
		logger.info("Successfully updated user: " + user);
		return userDao.save(user);
	}

	// DELETE
	public void deleteUserById(int id) {
		logger.info("Successfully deleted user: " + getUserById(id));
		userDao.deleteById(id);
	}
}
