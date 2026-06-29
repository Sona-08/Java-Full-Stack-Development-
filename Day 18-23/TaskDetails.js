import React, { useState } from 'react';


export const TaskDetails = () => {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [tasks, setTasks] = useState([]);

const handleAddTask = () => {
  if (!task || !name || !date || !number) {
    alert("Fill all fields before submitting");
    return;
  }

  fetch("http://localhost:8080/tasks/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, name, date, number })
  })
  .then((res) => {
    if (res.ok) {
      alert("Task added successfully");
    } else {
      alert("Error adding task");
    }
  });
};


  const handleViewTasks = async () => {
    fetch("http://localhost:8080/tasks/all")
     .then((res)=>res.json())
   
    .then((data)=>{setTasks(data)
    })
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <input 
        type="text" 
        placeholder="Enter Task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      /><br /><br />
      <input 
        type="text" 
        placeholder="Enter Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /><br /><br />
      <input 
        type="number" 
        placeholder="Enter number"
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      /><br /><br />

      <input 
        type="date" 
        placeholder="Enter Date"
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      /><br /><br />

      
      
      <button onClick={handleAddTask}>Add Task</button>
      <button style={{ marginLeft: "10px" }} onClick={handleViewTasks}>
        View All Tasks
      </button>
      


      {tasks.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>All Tasks in DB:</h3>
          <ul>
            {tasks.map((t) => (
              <li key={t.id}>{t.task} - {t.name} - {t.date} </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
