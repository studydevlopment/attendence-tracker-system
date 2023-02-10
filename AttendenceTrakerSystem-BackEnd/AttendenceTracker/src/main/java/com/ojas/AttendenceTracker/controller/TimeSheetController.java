package com.ojas.AttendenceTracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTracker.model.TimeSheetModel;
import com.ojas.AttendenceTracker.service.TimeSheetService;

@RestController
@CrossOrigin
public class TimeSheetController {
	@Autowired
	private TimeSheetService service;

	@GetMapping("/timesheets_list")
	public List<TimeSheetModel> viewAllTimesheets() {
		return service.getAllTimeSheets();
	}
	
	@GetMapping("/getTimeSheet/{id}")
	public TimeSheetModel getTimeSheetById(@PathVariable("id") long id) {
		return service.getTimeSheetById(id);
	}
//	@GetMapping("/getEmployee_list")
//	public List<String> employeeNames(){
//		return service.employeeList();
//	}
}
