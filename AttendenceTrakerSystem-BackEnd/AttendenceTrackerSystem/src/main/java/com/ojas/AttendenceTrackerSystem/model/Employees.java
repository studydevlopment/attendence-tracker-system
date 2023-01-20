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
@AllArgsConstructor
@NoArgsConstructor
public class Employees {

	@Id
	@GeneratedValue
	private int employeeId;
	private String employeeName;
	private String projectName;
	private String workingHours;
	private String projectDescrption;
	private String date;
}
