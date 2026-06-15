package com.example.Student_Course;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {

    private final Student_Repository srepo;

    public StudentService(Student_Repository srepo) {
        this.srepo = srepo;
    }

    // Get all students
    public List<Model_Student> getAllStudents() {
        return srepo.findAll();
    }

    // Add a student
    public Model_Student addStudent(Model_Student student) {
        return srepo.save(student);
    }
}
