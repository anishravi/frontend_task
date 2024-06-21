import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";

const InputHandler = ({ onSubmit, editMode, userRecord }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    if (userRecord) {
      setName(userRecord.name);
      setEmail(userRecord.email);
    }
  },[userRecord])

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Please enter all required fields");
    } else {
      onSubmit({ name, email });
      setName("");
      setEmail(""); 
    }
  };

  return (
    <div className="header-box">
      <Input
        size="large"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        size="large"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button type="primary" onClick={() => handleSubmit()}>
        {editMode ? "Edit user" : "Add user"}
      </Button>
    </div>
  );
};

export default InputHandler;
