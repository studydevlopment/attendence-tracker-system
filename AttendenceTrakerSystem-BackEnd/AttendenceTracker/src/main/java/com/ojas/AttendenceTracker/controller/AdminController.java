package com.ojas.AttendenceTracker.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import com.ojas.AttendenceTracker.model.TimeSheetModel;
import com.ojas.AttendenceTracker.service.AdminService;

import com.ojas.AttendenceTracker.service.TimeSheetService;

@RestController
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService service;
	@Autowired
	private TimeSheetService timeSheetService;

	@GetMapping("/projectsList")
	public List<String> projectsList() {
		return service.projectList();
	}

	@GetMapping("/managersList")
	public List<String> managerList() {
		return service.managersList();
	}

	@PostMapping("/registerEmployee")
	public void register(@RequestBody EmployeeEntity employee) {
		service.register(employee);

	}

	@GetMapping("/getAllEmployeeDetails")
	public List<EmployeeEntity> employeeDetailsList() {
		return service.employeeDetailsList();
	}

	@GetMapping("/viewEmployeeDetailById/{employeeId}")
	public Optional<EmployeeEntity> viewEmployeeDetail(@PathVariable("employeeId") Long employeeId) {
		return service.getEmployeeDetail(employeeId);
	}

	@PutMapping("/updateEmployeeDetail")
	public void updateEmployeeDetail(@RequestBody EmployeeEntity employee) {
		service.updateEmployee(employee);
	}

	@DeleteMapping("/deleteEmployeeDetail/{employeeId}")
	public void deleteEmployeeDetail(@PathVariable("employeeId") Long employeeId) {
		service.deleteEmployeeDetail(employeeId);
	}

	@GetMapping("/employeesList")
	public List<String> employeeList() {
		return service.employeesList();
	}

	@GetMapping("/viewAllTimeSheets")
	public List<TimeSheetModel> viewAllTimeSheets() {
		return timeSheetService.getAllTimeSheets();
	}
}
