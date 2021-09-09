import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="account"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button type="button" onClick={onCreate}>
        regist
      </button>
    </div>
  );
}

export default CreateUser;
