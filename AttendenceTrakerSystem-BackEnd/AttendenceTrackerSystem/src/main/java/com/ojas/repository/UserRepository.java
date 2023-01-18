package com.ojas.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ojas.springboot.model.Users;
@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
	
//	@Query(value = "select user from Users user where user.empId=?1 and user.password")
//	Users findByIdAndPassword(int empId,String password);

}
