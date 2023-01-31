package com.ojas.AttendenceTracker.model;

import com.ojas.AttendenceTracker.entity.ProjectEntity;
import com.ojas.AttendenceTracker.entity.TimeSheetEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeModel {
    private Long id;
    private String firstName;
    private String lastName;
    private String mail;
    private String phoneNumber;
    private String location;
    private String role;
    private String password;
    private List<ProjectEntity> projects;
    private List<TimeSheetEntity> timeSheets;
}
