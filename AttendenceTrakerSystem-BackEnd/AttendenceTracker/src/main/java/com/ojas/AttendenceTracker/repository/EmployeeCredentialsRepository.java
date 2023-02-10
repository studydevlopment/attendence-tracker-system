package com.ojas.AttendenceTracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ojas.AttendenceTracker.entity.EmployeeCredentialsEntity;
@Repository
public interface EmployeeCredentialsRepository extends JpaRepository<EmployeeCredentialsEntity, String> {
	@Query(value = "select role from employee_credentials where username=?1,password=?2", nativeQuery = true)
	public String findByUserNameAndPassword(String username, String password);

}
