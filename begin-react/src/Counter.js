import React, { useState, useReducer, Component } from 'react';

// CLASS COMPONENT
// class Counter extends Component {
//   // constructor(porps) {
//   //   super(props);
//   //   // this.handleIncrease = this.handleIncrease.bind(this);
//   //   // this.handleDecrease = this.handleDecrease.bind(this);
//   //   this.state = {
//   //     counter: 0
//   //   };
//   // }

//   state = {
//     counter: 0,
//     fixed: 1,
//   };

//   handleIncrease = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//     // this.setState(state => ({
//     //   counter: state.counter + 1,
//     // }));
//   };
//   handleDecrease = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   };
//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         <h2>{counter}</h2>
//         <button type="button" onClick={this.handleIncrease}>
//           +1
//         </button>
//         <button type="button" onClick={this.handleDecrease}>
//           -1
//         </button>
//         <p>고정된 값: {this.state.fixed}</p>
//       </div>
//     );
//   }
// }

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  // const [number, setNumber] = useState(0);

  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // setNumber(number + 1);
    // setNumber(prevNumber => prevNumber + 1);

    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrease = () => {
    // setNumber(number - 1);
    // setNumber(prevNumber => prevNumber - 1);

    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
    </div>
  );
}

export default Counter;
