import React, { Fragment, useState } from "react";

const InputTodo = ({isAdmin}) => {
  const [description, setDescription] = useState("");
  var admin;
  if (isAdmin) {
    admin = 'admin'
  } else {
    admin = 'user'
  }
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      
      window.location.reload();
      const body = { description, admin };
      console.log(body);
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
      
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
