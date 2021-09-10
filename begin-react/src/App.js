import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useReducer,
  createContext,
} from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import ContextSmaple from './ContextSample';

function countActiveUsers(users) {
  const countUser = users.filter(user => user.active).length;
  console.log('count active users...');
  return countUser;
}

// useReducer
const initialState = {
  // inputs: {
  //   username: '',
  //   email: '',
  // },
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value,
    //     },
    //   };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [index, setIndex] = useState(0);
  const indexText = ['hello', 'counter', 'input', 'array', 'context api'];
  const selectedIndex = index => {
    setIndex(prevIndex => (prevIndex = index));
  };

  const nextId = useRef(4);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const { username, email } = form;
  const { users } = state;
  // const { username, email } = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value,
  //   });
  // }, []);

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id,
  //   });
  // }, []);
  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id,
  //   });
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
        <UserDispatch.Provider value={dispatch}>
          <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
          />
          <UserList users={users} />
          <p>count user: {count}</p>
        </UserDispatch.Provider>
      ) : index === 4 ? (
        <ContextSmaple />
      ) : null}
    </>
  );
}

// UseState()
// function App() {
//   const [index, setIndex] = useState(0);

//   const indexText = ['hello', 'counter', 'input', 'array'];

//   const selectedIndex = index => {
//     setIndex(prevIndex => (prevIndex = index));
//   };

//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//   });
//   const { username, email } = inputs;

//   // useCallback() => inputs가 바뀔떄만 함수가 새로 만들어지고 아니면 재사용
//   const onChange = useCallback(
//     e => {
//       const { name, value } = e.target;
//       setInputs({
//         ...inputs,
//         [name]: value,
//       });
//     },
//     [inputs],
//   );

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'john',
//       email: 'heyho9012@gmail.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'test1',
//       email: 'test1@gmail.com',
//       active: false,
//     },
//     {
//       id: 3,
//       username: 'test2',
//       email: 'test2@gmail.com',
//       active: false,
//     },
//   ]);

//   const nextId = useRef(4);

//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email,
//       active: false,
//     };
//     if (username === '' || email === '') {
//       alert('빈 값을 입력해주세요.');
//     } else {
//       setUsers(users => [...users, user]);
//       // setUsers(users.concat(user));
//       setInputs({
//         username: '',
//         email: '',
//         active: false,
//       });
//       console.log(nextId.current); // 4
//       nextId.current++;
//     }
//     // }, [username, email, users]);
//   }, [username, email]);

//   const onRemove = useCallback(id => {
//     setUsers(users => users.filter(user => user.id !== id));
//   }, []);

//   const onToggle = useCallback(id => {
//     setUsers(users =>
//       users.map(user =>
//         user.id === id ? { ...user, active: !user.active } : user,
//       ),
//     );
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       {indexText.map((x, index) => (
//         <button type="button" key={index} onClick={() => selectedIndex(index)}>
//           {x}
//         </button>
//       ))}

//       {index === 0 ? (
//         <Wrapper>
//           <Hello name="react" color="red" isSpecial />
//           <Hello color="pink" />
//         </Wrapper>
//       ) : index === 1 ? (
//         <Counter />
//       ) : index === 2 ? (
//         <InputSample />
//       ) : index === 3 ? (
//         <>
//           <CreateUser
//             username={username}
//             email={email}
//             onChange={onChange}
//             onCreate={onCreate}
//           />
//           <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//           <p>count user: {count}</p>
//         </>
//       ) : null}
//     </>
//   );
// }

export default App;
