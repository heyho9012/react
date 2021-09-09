import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  console.log('CreateUser Component');
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

// React.memo => props가 바뀌었을 경우만 리렌더링
export default React.memo(CreateUser);
