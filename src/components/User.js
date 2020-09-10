import React, { useState, useEffect } from "react";

export const User = ({ user, removeUser, updateUser }) => {
  const [editUser, setEditUser] = useState(user);

  const [isEditMode, setIsEditMode] = useState(false);

  /**
   * Initial age 10-50
   */
  const [options, setOptions] = useState([]);
  useEffect(() => {
    let result = [];
    for (let i = 10; i <= 50; i++) {
      result = [...result, i];
    }
    setOptions([...result]);
  }, []);

  /**
   * Emit id to remove user
   */
  const handleRemoveUserClick = () => {
    removeUser(user.id);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  /**
   * When isEditMode === true
   *
   * Click at save button, leave edit mode and emit data to update user
   */
  const handleUpdateUser = () => {
    setIsEditMode(!isEditMode);
    updateUser(user.id, editUser);
  };

  const handleNameChange = (e) => {
    setEditUser({ ...editUser, name: e.target.value });
  };

  const handleSelectedAge = (e) => {
    setEditUser({ ...editUser, age: Number(e.target.value) });
  };
  /**
   * set value in <select></select> tag
   */
  let ageSelected = editUser.age || 10;

  const handleNickNameChange = (e) => {
    setEditUser({ ...editUser, nick_name: e.target.value });
  };

  const handleESC = (e) => {
    if (e.key === "Escape") {
      setIsEditMode(false);
    }
  };

  return (
    <tr onKeyDown={handleESC}>
      <td>
        {!isEditMode && <div>{user.name}</div>}
        {isEditMode && (
          <input
            type="text"
            value={editUser.name}
            onChange={handleNameChange}
          />
        )}
      </td>
      <td>
        {!isEditMode && <div>{user.age}</div>}
        {isEditMode && (
          <select
            value={ageSelected}
            onChange={handleSelectedAge}
            className="ml-2"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </td>
      <td>
        {!isEditMode && <div>{user.nick_name}</div>}
        {isEditMode && (
          <input
            type="text"
            value={editUser.nick_name}
            onChange={handleNickNameChange}
          />
        )}
      </td>
      <td className="d-flex justify-content-center" colSpan="1">
        {!isEditMode && <button onClick={toggleEditMode}>Edit</button>}
        {isEditMode && <button onClick={handleUpdateUser}>Save</button>}

        <button className="ml-2" onClick={handleRemoveUserClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};
