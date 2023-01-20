package com.ojas.AttendenceTrackerSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table
public class Users {
	@Id
	@GeneratedValue
	private int empId;
	private String empName;
	private String email;
	private String password;
	private String type;

}
