package com.ojas.springboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table
public class Users {
	@Id
	private int empId;
	private String empName;
	private String password;
	private String type;

}
