import React, { useState, useEffect } from "react";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";

const LOCAL_STORAGE_KEY = "react-users-list";

function App() {
  const [users, setUsers] = useState([]);

  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!storage) return;

    setUsers([...storage]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([user, ...users]);
  };

  const updateUser = (id, payload) => {
    const { name, age, nick_name } = payload;

    const editUser = users.map((user) => {
      if (user.id === id) {
        /**
         *  { ...user, name: payload}
         *  ทำเพื่อให้สามารถเข้าถึง property ใน user ได้โดยไม่ต้อง user.name
         */
        return { ...user, name, age, nick_name };
      }
      return user;
    });

    console.log(editUser);

    setUsers(editUser);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <header className="container mt-5">
        <UserList
          users={users}
          removeUser={removeUser}
          updateUser={updateUser}
        />
        {isShowForm && <UserForm addUser={addUser} />}
        <button
          className="mt-4"
          style={{ padding: "5px 20px" }}
          onClick={() => setIsShowForm(!isShowForm)}
        >
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
