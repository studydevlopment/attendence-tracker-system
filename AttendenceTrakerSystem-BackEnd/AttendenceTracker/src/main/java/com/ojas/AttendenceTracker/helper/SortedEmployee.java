package com.ojas.AttendenceTracker.helper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SortedEmployee {
    private Long sNo;
    private String firstName;
    private String lastName;
    private Date date;
    private String name;
    private String project;
    private Long hoursWorked;
    private String description;
    private String reportingManager;
}
