package com.ojas.AttendenceTracker.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;
import com.ojas.AttendenceTracker.repository.EmployeeCredentialsRepository;
import com.ojas.AttendenceTracker.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeCredentialsRepository credentialRepository;

	@Override
	public String login(String username, String password) {

		return credentialRepository.findByUserNameAndPassword(username, password);
	}
	
	public List<EmployeeCredentialsEntity> viewAllCredentials() {
		return credentialRepository.findAll();
	}

}
