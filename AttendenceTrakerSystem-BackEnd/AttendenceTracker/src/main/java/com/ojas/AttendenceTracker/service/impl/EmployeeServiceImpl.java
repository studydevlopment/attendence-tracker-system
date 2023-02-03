package com.ojas.AttendenceTracker.service.impl;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import com.ojas.AttendenceTracker.helper.SortedEmployee;
import com.ojas.AttendenceTracker.repository.EmployeeRepository;
import com.ojas.AttendenceTracker.service.EmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public abstract class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public SortedEmployee sortedEmployee(String fname) {
        EmployeeEntity employeeEntity = employeeRepository.sortEmployee(fname);
        SortedEmployee sortedEmployee=new SortedEmployee();
        BeanUtils.copyProperties(employeeEntity,sortedEmployee);
        return sortedEmployee;
    }
}
