package com.ojas.AttendenceTracker.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TIME_SHEET")
public class TimeSheetEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "SNO")
    private Long sNo;
    @Column(name = "DATE")
    private Date date;
    @Column(name = "NAME")
    private String name;
    @Column(name = "PROJECT")
    private String project;
    @Column(name = "HOURS_WORKED")
    private Long hoursWorked;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "REPORTING_MANAGER")
    private String reportingManager;
}
