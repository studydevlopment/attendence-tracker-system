package com.ojas.AttendenceTracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ojas.AttendenceTracker.entity.TimeSheetEntity;

@Repository
public interface TimeSheetRepository extends JpaRepository<TimeSheetEntity,Long> {
	
//	@Query("select firstName,lastName from EmployeeEntity where reportingManager")
//	public List<String> employeeNames();
}
