import React, { useState, useRef } from 'react';

function InputSample() {
  const [text, setText] = useState('');
  const [inputs, setInputs] = useState({ name: '', nickname: '' });
  const { name, nickname } = inputs;
  const nameInput = useRef();
  const textInput = useRef();

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
    textInput.current.focus();
  };
  const onResetName = () => {
    setInputs({ name: '', nickname: '' });
    nameInput.current.focus();
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} ref={textInput} />
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChangeInput}
        ref={nameInput}
      />
      <input
        type="text"
        placeholder="nickname"
        name="nickname"
        value={nickname}
        onChange={onChangeInput}
      />
      <button type="button" onClick={onReset}>
        Reset Text
      </button>
      <button type="button" onClick={onResetName}>
        Reset Name
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
