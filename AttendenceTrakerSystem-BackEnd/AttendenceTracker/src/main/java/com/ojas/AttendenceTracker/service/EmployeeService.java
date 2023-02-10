package com.ojas.AttendenceTracker.service;

import java.util.List;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;

public interface EmployeeService {
	public String login(String username, String password);
	
	public List<EmployeeCredentialsEntity> viewAllCredentials();

}
