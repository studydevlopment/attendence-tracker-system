package com.ojas.AttendenceTracker.service;

import com.ojas.AttendenceTracker.model.ProjectModel;

import java.util.List;

public interface ProjectService {
    public List<ProjectModel> getAllProjects();

    public ProjectModel getProjectById(Long id);

    public int createProject(ProjectModel project);

    public int updateProject(ProjectModel project);

    public int deleteProjectById(Long id);
}
