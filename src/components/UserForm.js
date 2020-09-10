import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: 10,
    nick_name: "",
  });

  const [options, setOptions] = useState([]);

  useEffect(() => {
    let result = [];
    for (let i = 10; i <= 50; i++) {
      result = [...result, i];
    }
    setOptions([...result]);
  }, []);

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleNickNameChange = (e) => {
    setUser({ ...user, nick_name: e.target.value });
  };

  const handleSelectedAge = (e) => {
    setUser({ ...user, age: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name) return;

    addUser({ ...user, id: uuidv4() });
    handleCancel();
  };

  const handleCancel = () => {
    setUser({ name: "", age: 10, nick_name: "" });
  };

  let ageSelected = user.age || 10;

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        style={{ width: "25%" }}
        type="text"
        value={user.name}
        onChange={handleNameChange}
      />
      <select
        style={{ width: "7" }}
        value={ageSelected}
        onChange={handleSelectedAge}
        className="ml-4 mr-5"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        style={{ width: "25%" }}
        type="text"
        value={user.nick_name}
        onChange={handleNickNameChange}
        className="ml-5 mr-5"
      />
      <button type="submit" className="ml-2">
        Save
      </button>
      <button type="cancel" className="ml-2" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};
