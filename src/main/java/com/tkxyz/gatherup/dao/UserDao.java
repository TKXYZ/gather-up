package com.tkxyz.gatherup.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tkxyz.gatherup.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

}
