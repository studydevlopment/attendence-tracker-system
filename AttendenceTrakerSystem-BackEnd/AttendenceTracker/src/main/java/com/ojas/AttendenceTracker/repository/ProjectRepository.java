package com.ojas.AttendenceTracker.repository;

import com.ojas.AttendenceTracker.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity,Long> {
}
