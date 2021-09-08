// import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from './InputSample';

function App() {
  // const name = 'react';
  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  // };
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink" />
        {/* <div className="name" style={style}>
        {name}
      </div> */}
      </Wrapper>
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <InputSample />
    </>
  );
}

export default App;
