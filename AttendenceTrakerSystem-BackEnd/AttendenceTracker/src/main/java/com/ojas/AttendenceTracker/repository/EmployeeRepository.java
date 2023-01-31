package com.ojas.AttendenceTracker.repository;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {
    @Query(value = "select * from employee where user_name=?1,password=?2",nativeQuery = true)
    public EmployeeEntity findByUserNameAndPassword(String username, String password);
}
