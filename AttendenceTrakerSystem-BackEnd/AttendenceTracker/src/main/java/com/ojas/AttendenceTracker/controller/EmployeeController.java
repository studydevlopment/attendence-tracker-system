package com.ojas.AttendenceTracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;
import com.ojas.AttendenceTracker.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/credentialsList")
	public List<EmployeeCredentialsEntity> getEmployeeCredentials() {
		return employeeService.viewAllCredentials();
	}
	@GetMapping("/employeeCredentials")
	public String login(@PathVariable("username") String userName,@PathVariable("password") String password){
		return employeeService.login(userName, password);
	}

}
