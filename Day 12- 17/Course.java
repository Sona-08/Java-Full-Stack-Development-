package com.example.full_stack_project_1;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name="course")
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="course_id")
    private Long id;
    @Column(name="course_name",nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "student_id",referencedColumnName = "student_id")
    private Student student;


}
