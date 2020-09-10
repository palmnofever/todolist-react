import React from "react";
import { Table } from "react-bootstrap";
import { User } from "./User";

export const UserList = ({ users, removeUser, updateUser }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Nickname</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            removeUser={removeUser}
            updateUser={updateUser}
          />
        ))}
      </tbody>
    </Table>
  );
};
