package com.ojas.AttendenceTrackerSystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojas.AttendenceTrackerSystem.model.Project;
import com.ojas.AttendenceTrackerSystem.reposity.ProjectRepositroy;

@Service
public class ProjectServices {
	
	@Autowired
	private ProjectRepositroy projectRepositroy;
	
	public String addProject(Project project) {
		
		Project p=projectRepositroy.save(project);
		
		if(p!=null)
		
		return "project added ";
		else
			return "project not addedd try agian";
	}
	
	public List<Project> getAllProjects(){
		
		return projectRepositroy.findAll();
		
	}

}
