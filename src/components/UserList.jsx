import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
