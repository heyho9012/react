import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

// function Child({ text }) {
//   return <div>hi, {text}</div>;
// }
function Child() {
  const text = useContext(MyContext);
  return (
    <div>
      <h2>context api sample</h2>
      <div>hi, {text}</div>
    </div>
  );
}
function Parent({ text }) {
  return <Child text={text} />;
}
function GrandParent({ text }) {
  return <Parent text={text} />;
}
function ContextSmaple({ text }) {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent />
      <button
        type="button"
        onClick={() => {
          setValue(!value);
        }}
      >
        CLICK ME
      </button>
    </MyContext.Provider>
  );
}

export default ContextSmaple;
