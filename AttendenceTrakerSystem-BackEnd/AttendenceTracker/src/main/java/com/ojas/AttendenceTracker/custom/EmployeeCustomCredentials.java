package com.ojas.AttendenceTracker.custom;

import java.io.Serializable;
import java.util.Random;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.springframework.beans.factory.annotation.Autowired;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;
import com.ojas.AttendenceTracker.entity.EmployeeEntity;

public class EmployeeCustomCredentials implements IdentifierGenerator {
	@Autowired
	private EmployeeEntity entity;

	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		EmployeeCredentialsEntity cre = (EmployeeCredentialsEntity) object;

		String fName = entity.getFirstName().substring(0, 1).toLowerCase();
		String sName = entity.getLastName().substring(0, 1).toLowerCase();
		int num = new Random().nextInt(10000, 99999);
		return fName + sName + num;
	}

}
