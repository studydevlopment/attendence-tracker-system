package com.ojas.AttendenceTracker.model;

import javax.persistence.Column;

public class EmployeeCredentialsModel {
	
	private Long id;
	
	private String userName;
	
	private String passWord;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

}
