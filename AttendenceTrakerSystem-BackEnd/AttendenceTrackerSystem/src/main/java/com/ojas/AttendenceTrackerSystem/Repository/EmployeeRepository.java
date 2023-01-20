package com.ojas.AttendenceTrackerSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojas.AttendenceTrackerSystem.model.Employees;

public interface EmployeeRepository extends JpaRepository<Employees, Integer> {

}
