package com.tkxyz.gatherup.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tkxyz.gatherup.model.User;

/**
 * DAO class that extends JpaRepository to provide CRUD methods to service class.
 */
@Repository
public interface UserDao extends JpaRepository<User, Integer> {

}
