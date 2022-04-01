package com.tkxyz.gatherup.dao;

import com.tkxyz.gatherup.model.Event;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EventDao extends JpaRepository<Event, Integer> {

}
