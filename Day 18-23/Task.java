package com.example.Tasks;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String date;
    @Column(nullable = false)
    private String task;
   //@NotBlank(message = "Phone number is mandatory")
    @Column(nullable = false)
    private String number;

    public Task() {}

    public Task(String name, String date,String task,String number)
    {   this.task = task;
        this.name = name;
        this.date = date;
        this.number=number;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }
}
