import React, { useState } from "react";
const Task = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [task, setTask] = useState([]);

  function AddTask() {
    const newTask = { title, summary };
    setTask([...task, newTask]);
    setTitle("")
    setSummary("")
  }

  return (
    <>
      <div className="w-60 border-1 min-h-60 m-10 text-center">
        <h1>Todo Task</h1>
        <div className="">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Summary"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
          <button className="border-1 px-8 py-1 mt-4" onClick={AddTask}>
            Add Task
          </button>
        </div>
      </div>

      <div className="container p-10">
        <h1>hello</h1>

        <ul>
          {task.map((data, index) => (
            <div>
              <li>{data.title}</li>
              <li>{data.summary}</li>
              {/* <button>Delete</button> */}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
