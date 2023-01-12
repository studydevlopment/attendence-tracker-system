package com.ojas.AttendenceTrackerSystem.services;

import com.ojas.AttendenceTrackerSystem.model.Employee;

public interface EmployeeServices {
	
	public String registerEmployee(Employee employee);
	
	public Employee findByEmailAndPassword(String empEmail ,String empConfirmPassWord);
	
	

}
