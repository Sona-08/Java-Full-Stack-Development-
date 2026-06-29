package com.example.Tasks;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    @Autowired
    private  TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository){
        this.taskRepository=taskRepository;
    }
    public TaskController(){}
    @PostMapping("/add")
    public void addTask(@RequestBody Task task) {
        taskRepository.save(task);

    }

    @GetMapping("/all")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}

