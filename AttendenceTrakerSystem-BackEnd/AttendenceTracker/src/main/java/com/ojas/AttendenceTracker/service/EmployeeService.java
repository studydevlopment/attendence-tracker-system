package com.ojas.AttendenceTracker.service;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;

public interface EmployeeService {
    public EmployeeEntity login(String username, String password);
    public int register(EmployeeEntity employee);

}
