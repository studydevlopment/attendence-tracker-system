package com.ojas.AttendenceTracker.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;
import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import com.ojas.AttendenceTracker.entity.TimeSheetEntity;
import com.ojas.AttendenceTracker.repository.EmployeeCredentialsRepository;
import com.ojas.AttendenceTracker.repository.EmployeeRepository;
import com.ojas.AttendenceTracker.repository.TimeSheetRepository;
import com.ojas.AttendenceTracker.service.AdminService;
@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private EmployeeCredentialsRepository employeeCredentialsRepository;
	@Autowired
	private TimeSheetRepository timeSheetRepository;
	@Override
	public List<String> projectList() {
		return employeeRepository.projectsList();
	}

	@Override
	public List<String> managersList() {
		return employeeRepository.managerList();
	}

	@Override
	public EmployeeEntity register(EmployeeEntity employee) {
		EmployeeEntity saveEmployee = employeeRepository.save(employee);
		EmployeeCredentialsEntity credential = new EmployeeCredentialsEntity();
		credential.setId(saveEmployee.getId());
		credential.setRole(saveEmployee.getRole());
		Random random = new Random();
		credential.setPassWord(random.nextInt(100000, 999999) + "");
		String fName = saveEmployee.getFirstName().substring(0, 1).toLowerCase();
		String sName = saveEmployee.getLastName().substring(0, 1).toLowerCase();
		int num = new Random().nextInt(10000, 99999);
		credential.setUserName(fName+sName+num);
		employeeCredentialsRepository.save(credential);
		return saveEmployee;
	}

	@Override
	public List<EmployeeEntity> employeeDetailsList() {
		
		return employeeRepository.findAll();
	}

	@Override
	public Optional<EmployeeEntity> getEmployeeDetail(Long employeeId) {
		
		return employeeRepository.findById(employeeId);
	}

	@Override
	public EmployeeEntity updateEmployee(EmployeeEntity employee) {
		
		return employeeRepository.save(employee);
	}

	@Override
	public void deleteEmployeeDetail(Long employeeId) {
		employeeRepository.deleteById(employeeId);

	}

	@Override
	public List<String> employeesList() {
		return employeeRepository.employeeList();
	}

	@Override
	public List<TimeSheetEntity> timeSheets() {
		
		return timeSheetRepository.findAll();
	}

}
