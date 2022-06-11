package com.tkxyz.gatherup.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tkxyz.gatherup.model.Event;

@Repository
public interface EventDao extends JpaRepository<Event, Integer> {

}
