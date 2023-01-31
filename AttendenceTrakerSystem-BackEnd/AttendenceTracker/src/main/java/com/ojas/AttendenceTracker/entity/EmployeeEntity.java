package com.ojas.AttendenceTracker.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "EMPLOYEE")
public class EmployeeEntity {
    @Id
    @Column(name = "EMPLOYEE_ID")
    private Long id;
    @Column(name = "FIRST_NAME")
    private String firstName;
    @Column(name = "LAST_NAME")
    private String lastName;
    @Column(name = "MAIL")
    private String mail;
    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;
    @Column(name = "LOCATION")
    private String location;
    @Column(name = "ROLE")
    private String role;
    @Column(name = "PASSWORD")
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "EMPLOYEE_ID", referencedColumnName = "id")
    private List<ProjectEntity> projects;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "EMPLOYEE_ID", referencedColumnName = "id")
    private List<TimeSheetEntity> timeSheets;
}
