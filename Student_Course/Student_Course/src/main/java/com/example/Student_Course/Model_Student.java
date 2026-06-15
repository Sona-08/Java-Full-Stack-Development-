package com.example.Student_Course;

import jakarta.persistence.*;

@Entity
@Table(name="student")
public class Model_Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long s_id;
    private String name;
    private Long c_id;
    public Model_Student() {}
    public Model_Student(String name){
        this.name=name;
    }
    public String getName(){
        return name;
    }

    public Long getS_id(){
        return s_id;
    }

    public Long getC_id(){
        return c_id;
    }
}
