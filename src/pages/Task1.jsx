import React, { useState } from "react";

const Task1 = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState("")

  function AddTask() {
    const newUser = { title, detail };

    

    setTask([...task, newUser]);
    setTitle("");
    setDetail("");
  }

  function DeleteButton(index) {
    const filter = task.filter((data, i)=>(
        index ==! i
    ))


    setTask(filter)
  }

  return (
    <>
      <div>Task1</div>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="outline-1"
      />
      <input
        type="text"
        placeholder="Enter Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        className="outline-1"
      />
      <button onClick={AddTask}>AddTAsk</button>

      <div className=" mt-8  w-96 space-y-4 ">
        {task.map((data, index) => (
          <div className="border border-black p-4 rounded shadow ">
            <h1>hello Task</h1>
            <li key={index}>{data.title}</li>
            <li>{data.detail}</li>
            <button onClick={()=> DeleteButton(index)}>Delete</button>
            <button onClick={()=> editButton(index)}>Edit</button>
          </div>
        ))}
      </div>

      {/* <div className="mt-8 space-y-4">
        {task.map((data, index) => (
          <div key={index} className="border border-black p-4 rounded shadow">
            <h2 className="font-bold text-lg">{data.title}</h2>
            <p>{data.detail}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Task1;
