import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, editUser, deleteUser } = props;
  const [editMode, setEditMode] = useState(false);
  const [userRecord, setUserRecord] = useState(null);
  
  const handleSubmit = ({ name, email }) => {
    if(editMode){
      editUser(userRecord.id,{name, email})
      setEditMode(false);
    }else{
      addUser({ name, email })
    }
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleEdit = (user) => {
    setEditMode(true);
    setUserRecord(user);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper" className="container">
      <InputHandler onSubmit={handleSubmit}
      userRecord={userRecord} 
      editMode={editMode} 
      />
      <SimpleTable
        dataSource={userState.users}
        onEdit={handleEdit} 
        onDelete={handleDelete}
      />
    </div>
  );
}

export default MainComponent;
