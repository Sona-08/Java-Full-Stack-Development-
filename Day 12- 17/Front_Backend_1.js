import React, { useState } from "react";

export const Front_Backend_1 = () => {
  const [msg, setMsg] = useState("");
  const [newMsg, setNewMsg] = useState("");
  const [allMsg,setAllMessages]=useState([]);

  function getMessage() {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then((data) => setMsg(data));
  }
  function getAllMessages() {
    fetch("http://localhost:8080/hello/all")
      .then((res) => res.json())
      .then((data) => setAllMessages(data));
  }

  function saveMessage() {
    fetch("http://localhost:8080/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newMsg }),
    })
      .then((res) => res.text())
      .then((data) => alert(data));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>This is "REACT FRONT END"</h1>
      <button onClick={getMessage}>Get Backend Message</button>
      <p>Message from backend: {msg}</p>

      <input
        type="text"
        placeholder="New message"
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />
      <button onClick={saveMessage}>Save to DB</button>
      <button onClick={getAllMessages} >Get All Message</button>
      <div>
        {allMsg.map((m) => (
          <div key={m.id}>{m.text}</div>
        ))}
      </div>
    </div>
  );
};