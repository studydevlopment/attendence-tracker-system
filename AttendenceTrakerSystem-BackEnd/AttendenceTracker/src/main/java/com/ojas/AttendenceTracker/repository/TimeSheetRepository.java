package com.ojas.AttendenceTracker.repository;

import com.ojas.AttendenceTracker.entity.TimeSheetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeSheetRepository extends JpaRepository<TimeSheetEntity,Long> {
}
