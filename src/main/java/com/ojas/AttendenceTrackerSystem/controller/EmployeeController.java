package com.ojas.AttendenceTrackerSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTrackerSystem.model.Employee;
import com.ojas.AttendenceTrackerSystem.model.EmployeeAttadance;
import com.ojas.AttendenceTrackerSystem.model.Project;
import com.ojas.AttendenceTrackerSystem.services.EmployeeAttandanceServices;
import com.ojas.AttendenceTrackerSystem.services.EmployeeServices;
import com.ojas.AttendenceTrackerSystem.services.ProjectServices;

@RestController
@CrossOrigin
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeServices employeeServices;
	
	@Autowired
	private ProjectServices projectServices;
	
	@Autowired
	private EmployeeAttandanceServices employeeAttandanceServices;
	
	
	@PostMapping("/register")
    public String registerEmployee(@RequestBody Employee employee) {
		return employeeServices.registerEmployee(employee);
    	
    }
	
    @GetMapping("/login/{empEmail}/{empConfirmPassWord}")
	public String findByEmailAndPassword(@PathVariable String empEmail ,@PathVariable String empConfirmPassWord) {
		 
		Employee emp= employeeServices.findByEmailAndPassword(empEmail, empConfirmPassWord);
		
		if(emp!=null) {
			return "login sucessfully";
		}
		else {
			return "you enter the wrong credentails";
		}
	
	}
	
	@PostMapping("/addproject")
	public String addProject(@RequestBody Project project) {
		
		return projectServices.addProject(project);
		
	}
	
	@GetMapping("/getallproject")
	public List<Project> getAllProject(){
		
		return projectServices.getAllProjects();
		
	}
	
	@PostMapping("/addattadance")
	public String saveEmployeeAttadanceDetails(@RequestBody EmployeeAttadance employeeAttandnce) {
		
		return employeeAttandanceServices.addEmployeeAttandance(employeeAttandnce);
		
	}
	
	@PostMapping("/allattandace")
	public String  saveAllEmployeeAttadanceDetails(@RequestBody List<EmployeeAttadance> attandace) {
		
		return employeeAttandanceServices.addAllEmpAttadanceDetails(attandace);
	}

}
