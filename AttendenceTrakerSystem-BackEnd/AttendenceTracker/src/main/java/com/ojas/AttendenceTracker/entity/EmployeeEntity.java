package com.ojas.AttendenceTracker.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "EMPLOYEE")
public class EmployeeEntity {
	@Id
	@Column(name = "EMPLOYEE_ID")
	private Long id;
	@Column(name = "FIRST_NAME")
	private String firstName;
	@Column(name = "LAST_NAME")
	private String lastName;
	@Column(name = "MAIL")
	private String mail;
	@Column(name = "PHONE_NUMBER")
	private String phoneNumber;
	@Column(name = "LOCATION")
	private String location;
	@Column(name = "DESIGNATION")
	private String designation;
	@Column(name = "ROLE")
	private String role;
	@Column(name = "PROJECT")
	private String project;
	@Column(name = "REPORTING_MANAGER")
	private String reportingManager;
//	private boolean isInitial =true;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "EMPLOYEE_ID", referencedColumnName = "EMPLOYEE_ID")
	private List<ProjectEntity> projects;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "EMPLOYEE_ID", referencedColumnName = "EMPLOYEE_ID")
	private List<TimeSheetEntity> timeSheets;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getReportingManager() {
		return reportingManager;
	}

	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}

//	public boolean isInitial() {
//		return isInitial;
//	}
//
//	public void setInitial(boolean isInitial) {
//		this.isInitial = isInitial;
//	}

	public List<ProjectEntity> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectEntity> projects) {
		this.projects = projects;
	}

	public List<TimeSheetEntity> getTimeSheets() {
		return timeSheets;
	}

	public void setTimeSheets(List<TimeSheetEntity> timeSheets) {
		this.timeSheets = timeSheets;
	}

}
