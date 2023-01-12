package com.ojas.AttendenceTrackerSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojas.AttendenceTrackerSystem.model.EmployeeAttadance;
import com.ojas.AttendenceTrackerSystem.reposity.EmployeeAttandaceRepositroy;

@Service
public class EmployeeAttandanceServices {
	
	@Autowired
	private EmployeeAttandaceRepositroy employeeAttandaceRepositroy;
	
	
	public String addEmployeeAttandance(EmployeeAttadance employeeAttadance) {
		
		EmployeeAttadance empAttadance=employeeAttandaceRepositroy.save(employeeAttadance);
		
		if(empAttadance!=null) {
			return "employee Attadnace Details is saved";
		}
		else {
			return "employee Attadnace Details not  saved";
		}
		
	}
	
	public String  addAllEmpAttadanceDetails(List<EmployeeAttadance> attands) {
		
		List<EmployeeAttadance> empattands = employeeAttandaceRepositroy.saveAll(attands);
		
		if(empattands.size()>0) {
			return "your attadance details is saved";
		}
		else {
			return "your attadance detaisl not saved";
		}
		
	}
	
	

}
