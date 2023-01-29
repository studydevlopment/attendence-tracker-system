package com.ojas.AttendenceTrackerSystem.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
public class Employees {

	@Id
	@GeneratedValue
	private int employeeId;
	private String employeeName;
	private String projectName;
	private String workingHours;
	private String projectDescrption;
	private String date;
	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getWorkingHours() {
		return workingHours;
	}
	public void setWorkingHours(String workingHours) {
		this.workingHours = workingHours;
	}
	public String getProjectDescrption() {
		return projectDescrption;
	}
	public void setProjectDescrption(String projectDescrption) {
		this.projectDescrption = projectDescrption;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Employees(int employeeId, String employeeName, String projectName, String workingHours,
			String projectDescrption, String date) {
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.projectName = projectName;
		this.workingHours = workingHours;
		this.projectDescrption = projectDescrption;
		this.date = date;
	}
	
	public Employees() {
		
	}
}
