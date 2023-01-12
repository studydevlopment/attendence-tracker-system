package com.ojas.AttendenceTrackerSystem.reposity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojas.AttendenceTrackerSystem.model.EmployeeAttadance;

@Repository
public interface EmployeeAttandaceRepositroy extends JpaRepository<EmployeeAttadance, Integer> {

}
