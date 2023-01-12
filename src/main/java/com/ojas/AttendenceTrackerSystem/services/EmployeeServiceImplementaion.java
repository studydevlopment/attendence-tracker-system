package com.ojas.AttendenceTrackerSystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojas.AttendenceTrackerSystem.model.Employee;
import com.ojas.AttendenceTrackerSystem.reposity.EmployeeRepositry;

@Service
public class EmployeeServiceImplementaion implements EmployeeServices {
	
	@Autowired
	private EmployeeRepositry employeeRepositry;

	@Override
	public String registerEmployee(Employee employee) {
		Employee emp=employeeRepositry.save(employee);
		if(emp!=null)
		return "employee registeration sucessfully";
		else
		return "something is worng please try agin";
	}

	@Override
	public Employee findByEmailAndPassword(String empEmail, String empConfirmPassWord) {
		
		return employeeRepositry.findByEmailAndPassword(empEmail, empConfirmPassWord);
	}

}
