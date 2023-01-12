package com.ojas.AttendenceTrackerSystem.reposity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ojas.AttendenceTrackerSystem.model.Employee;

@Repository
public interface EmployeeRepositry extends JpaRepository<Employee, Integer> {
	
	@Query(value = "select emp from Employee emp where  emp.empEmail =?1 and emp.empConfirmPassWord=?2")
	Employee findByEmailAndPassword(String empEmail ,String empConfirmPassWord);

}
