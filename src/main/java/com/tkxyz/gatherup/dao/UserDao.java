package com.tkxyz.gatherup.dao;

import com.tkxyz.gatherup.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
  // Specific methods not included in JpaRepository
  User findUserByEmail(String email);
}
