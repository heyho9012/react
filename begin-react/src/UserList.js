import React from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  return (
    <li>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>{email}</span>
      <button type="button" onClick={() => onRemove(id)}>
        del
      </button>
    </li>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <ul>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default UserList;
