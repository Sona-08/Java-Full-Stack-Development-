package com.example.repo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class Student_Controller {
    private final Student_Repository repo = new Student_Repository();

    @GetMapping
    public List<Student> getStudents() {
        return repo.findAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student s) {
        repo.save(s);
        return s;
    }
}