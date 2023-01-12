package com.ojas.AttendenceTrackerSystem.reposity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojas.AttendenceTrackerSystem.model.Project;

@Repository
public interface ProjectRepositroy extends JpaRepository<Project, Integer> {

}
