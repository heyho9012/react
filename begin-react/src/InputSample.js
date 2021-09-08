import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const [inputs, setInputs] = useState({ name: '', nickname: '' });
  const { name, nickname } = inputs;

  const onChange = e => {
    console.log('e.target.value >>>', e.target.value);
    setText(e.target.value);
  };

  const onChangeInput = e => {
    const { name, value } = e.target;

    console.log('e.taget.name >>', name, 'e.taget.value >>', value);

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setText('');
    setInputs({ name: '', nickname: '' });
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChangeInput}
      />
      <input
        type="text"
        placeholder="nickname"
        name="nickname"
        value={nickname}
        onChange={onChangeInput}
      />
      <button type="button" onClick={onReset}>
        Reset
      </button>
      <div>
        <b>value: {text}</b>
        <p>
          {name}({nickname})
        </p>
      </div>
    </div>
  );
}

export default InputSample;
