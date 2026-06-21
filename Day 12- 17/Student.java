package com.example.full_stack_project_1;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="students")
@Data
public class Student {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="student_id")
    private Long id;
    @Column(name="student_name",nullable=false,length=50)
    private String name;
    private String dept;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="profile_id",referencedColumnName = "id")
    private Profile profile;
    @OneToMany(mappedBy="student",cascade= CascadeType.ALL)
    private List<Course> course;
}
