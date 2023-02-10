package com.ojas.AttendenceTracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;
import com.ojas.AttendenceTracker.entity.EmployeeEntity;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
	
	@Query(value = "select name from project", nativeQuery = true)
	public List<String> projectsList();

	@Query(value = "select FIRST_NAME,LAST_NAME from EMPLOYEE where role='manager'", nativeQuery = true)
	public List<String> managerList();
	
	@Query(value = "select FIRST_NAME,LAST_NAME from employee", nativeQuery = true)
	public List<String> employeeList();

}
