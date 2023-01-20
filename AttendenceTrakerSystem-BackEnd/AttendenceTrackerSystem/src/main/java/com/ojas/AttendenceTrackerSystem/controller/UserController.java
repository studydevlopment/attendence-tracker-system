package com.ojas.AttendenceTrackerSystem.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.AttendenceTrackerSystem.Repository.UserRepository;
import com.ojas.AttendenceTrackerSystem.model.Users;



@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired(required=true)
	private UserRepository repo;
	
	
	@PostMapping("/create")
	public Users createUser(@RequestBody Users users) {
		return repo.save(users);
	}
	
	@GetMapping("/all")
	public List<Users> viewAllUsers(){
		return repo.findAll();
	}
	
	@GetMapping("/view/{empId}")
	
	public Optional<Users> viewById(@PathVariable int empId){
		return repo.findById(empId);		
	}
	
	@PutMapping("/update")
	public Users updateUser(@RequestBody Users users ) {
		return repo.saveAndFlush(users);
	}
	
	@DeleteMapping("/delete/{empId}")
	public void deleteUser(@PathVariable int empId) {
		repo.deleteById(empId);
	}
	

}
