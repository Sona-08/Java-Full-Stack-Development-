package com.example.Student_Profile_Demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Student_Controller {
    @PostMapping("/students")
    public UserProfile addStudent(@RequestBody  UserProfile student){
        return student;
    }
}
