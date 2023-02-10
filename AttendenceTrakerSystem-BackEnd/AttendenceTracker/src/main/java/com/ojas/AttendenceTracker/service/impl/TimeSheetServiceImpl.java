package com.ojas.AttendenceTracker.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ojas.AttendenceTracker.entity.TimeSheetEntity;
import com.ojas.AttendenceTracker.model.TimeSheetModel;
import com.ojas.AttendenceTracker.repository.TimeSheetRepository;
import com.ojas.AttendenceTracker.service.TimeSheetService;

@Service
public class TimeSheetServiceImpl implements TimeSheetService {
	@Autowired
	private TimeSheetRepository repository;

	@Override
	public List<TimeSheetModel> getAllTimeSheets() {
		List<TimeSheetModel> list = new ArrayList<>();
		List<TimeSheetEntity> listEntity = repository.findAll();
		for (TimeSheetEntity t : listEntity) {
			TimeSheetModel model = new TimeSheetModel();
			BeanUtils.copyProperties(t, model);
			list.add(model);
		}
		return list;
	}

	@Override
	public TimeSheetModel getTimeSheetById(Long id) {

		Optional<TimeSheetEntity> timeSheet = repository.findById(id);
		TimeSheetModel model = new TimeSheetModel();
		BeanUtils.copyProperties(timeSheet, model);
		return model;
	}

	@Override
	public int createTimeSheet(TimeSheetModel project) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateTimeSheet(TimeSheetModel project) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteTimeSheetById(Long id) {
		// TODO Auto-generated method stub
		return 0;
	}

//	@Override
//	public List<String> employeeList() {
//		
//		return repository.employeeNames();
//	}

}
