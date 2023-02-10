package com.ojas.AttendenceTracker.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import com.ojas.AttendenceTracker.entity.TimeSheetEntity;

public interface AdminService {

	public List<String> projectList();

	public List<String> managersList();

	public EmployeeEntity register(EmployeeEntity employee);

	public List<EmployeeEntity> employeeDetailsList();

	public Optional<EmployeeEntity> getEmployeeDetail(Long employeeId);

	public EmployeeEntity updateEmployee(EmployeeEntity employee);

	public void deleteEmployeeDetail(Long employeeId);

	public List<String> employeesList();

	public List<TimeSheetEntity> timeSheets();
}
