package com.ojas.AttendenceTracker.entity;

import javax.persistence.*;
import java.util.Date;

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

	public Long getsNo() {
		return sNo;
	}

	public void setsNo(Long sNo) {
		this.sNo = sNo;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public Long getHoursWorked() {
		return hoursWorked;
	}

	public void setHoursWorked(Long hoursWorked) {
		this.hoursWorked = hoursWorked;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getReportingManager() {
		return reportingManager;
	}

	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}

}
