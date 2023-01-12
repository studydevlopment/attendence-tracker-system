package com.ojas.AttendenceTrackerSystem.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeAttadance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int empAttandceId;
	
	private String empName;
	
	private String date;
	private String numberHours;
	private String projectDecrtion;
	
	
	private String  projectName;
	
	

}
