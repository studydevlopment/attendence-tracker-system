package com.ojas.AttendenceTrackerSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTrackerSystem.Repository.EmployeeRepository;
import com.ojas.AttendenceTrackerSystem.model.Employees;
import com.ojas.AttendenceTrackerSystem.model.Users;

@RestController()
@RequestMapping("/employe")
@CrossOrigin

public class EmployeeController {
	
	@Autowired
	private EmployeeRepository emprepo;

	@PostMapping("/create")
	public Employees createEmploye(@RequestBody Employees employees) {
		return emprepo.save(employees);
	}
	
	@GetMapping("/all")
	public List<Employees> viewAllUsers(){
		return emprepo.findAll();
	}
}
