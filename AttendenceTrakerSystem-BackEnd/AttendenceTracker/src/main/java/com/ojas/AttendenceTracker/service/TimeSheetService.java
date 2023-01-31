package com.ojas.AttendenceTracker.service;

import com.ojas.AttendenceTracker.model.ProjectModel;
import com.ojas.AttendenceTracker.model.TimeSheetModel;

import java.util.List;

public interface TimeSheetService {
    public List<TimeSheetModel> getAllTimeSheets();

    public TimeSheetModel getTimeSheetById(Long id);

    public int createTimeSheet(TimeSheetModel project);

    public int updateTimeSheet(TimeSheetModel project);

    public int deleteTimeSheetById(Long id);
}
