package com.ojas.AttendenceTracker.controller;

import com.ojas.AttendenceTracker.helper.SortedEmployee;
import com.ojas.AttendenceTracker.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/list/{fname}")
    public SortedEmployee getSortedEmployee(@PathVariable String fname){
        return employeeService.sortedEmployee(fname);
    }
}
