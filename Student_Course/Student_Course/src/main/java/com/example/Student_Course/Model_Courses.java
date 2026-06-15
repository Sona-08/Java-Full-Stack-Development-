package com.example.Student_Course;

import jakarta.persistence.*;

@Entity
@Table(name="courses")
public class Model_Courses {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long c_id;
    private String c_name;
    private Long s_id;

    public Model_Courses() {}
    public Model_Courses(String c_name){
        this.c_name=c_name;
    }

    public String getC_name(){
        return c_name;
    }

    public Long getC_id(){
        return c_id;
    }
    public Long getS_id(){
        return s_id;
    }



}
