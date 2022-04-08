package com.tkxyz.gatherup.dao;

import com.tkxyz.gatherup.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventDao extends JpaRepository<Event, Integer> {

}
