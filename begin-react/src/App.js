import React, { useState, useRef } from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [index, setIndex] = useState(0);

  const indexText = ['hello', 'counter', 'input', 'array'];

  const selectedIndex = index => {
    setIndex(prevIndex => (prevIndex = index));
  };

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'john',
      email: 'heyho9012@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'test1',
      email: 'test1@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'test2',
      email: 'test2@gmail.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
      active: false,
    });
    console.log(nextId.current); // 4
    nextId.current++;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };

  return (
    <>
      {indexText.map((x, index) => (
        <button type="button" key={index} onClick={() => selectedIndex(index)}>
          {x}
        </button>
      ))}

      {index === 0 ? (
        <Wrapper>
          <Hello name="react" color="red" isSpecial />
          <Hello color="pink" />
        </Wrapper>
      ) : index === 1 ? (
        <Counter />
      ) : index === 2 ? (
        <InputSample />
      ) : index === 3 ? (
        <>
          <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
          />
          <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
      ) : null}
    </>
  );
}

export default App;
