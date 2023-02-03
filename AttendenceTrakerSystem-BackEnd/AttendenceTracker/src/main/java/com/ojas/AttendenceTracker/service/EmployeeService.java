package com.ojas.AttendenceTracker.service;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import com.ojas.AttendenceTracker.helper.SortedEmployee;

public interface EmployeeService {
    public EmployeeEntity login(String username, String password);
    public int register(EmployeeEntity employee);
    public SortedEmployee sortedEmployee( String fname);

}
