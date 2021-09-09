import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log('user (값이 설정된 시점) >>>', user);
    // props -> state
    // REST API
    // D3 Video.js
    // setInterval, setTimeout
    return () => {
      // clearInterval, clearTimeout
      // 라이브러리 인스턴스 제거
      console.log('user (값이 바뀌기 전 시점) >>>', user);
    };
  }, [user]);

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
      <span>({email}) </span>
      <button type="button" onClick={() => onRemove(id)}>
        del
      </button>
    </li>
  );
});

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

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);
