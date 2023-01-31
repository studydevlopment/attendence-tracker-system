package com.ojas.AttendenceTracker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimeSheetModel {
    private Long sNo;
    private Date date;
    private String name;
    private String project;
    private Long hoursWorked;
    private String description;
    private String reportingManager;
}
