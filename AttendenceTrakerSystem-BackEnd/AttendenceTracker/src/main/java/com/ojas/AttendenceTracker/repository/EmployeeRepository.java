package com.ojas.AttendenceTracker.repository;

import com.ojas.AttendenceTracker.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    @Query(value = "select * from employee where user_name=?1,password=?2", nativeQuery = true)
    public Optional<?> findByUserNameAndPassword(String username, String password);
    String nameQ = "first_name=?1,last_name=?2,";
    String startDateQ = "date>=?3";
    String endDateQ = "date<=?4";
    String sortQuery = "select e.first_name" +
            ",e.last_name" +
            ",t.date" +
            ",t.name" +
            ", t.project" +
            ", t.hours_worked" +
            ",t.description" +
            ", t.reporting_manger " +
            "FROM employee e JOIN time_sheet t on e.id=t.employee_id" +
            "WHERE "+nameQ + startDateQ+ endDateQ;

    @Query(value = sortQuery, nativeQuery = true)
    public EmployeeEntity sortEmployee(String name);

}
