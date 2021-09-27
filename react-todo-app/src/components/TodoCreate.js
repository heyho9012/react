import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd, MdAirlineSeatIndividualSuite } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 5;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #38d9a9;
  font-size: 60px;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;
  cursor: pointer;

  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }

  ${props =>
    props.open &&
    css`
      background-color: #ff6b6b;
      transform: translate(-50%, 50%) rotate(45deg);
      &:hover {
        background-color: #ff8787;
      }
      &:active {
        background-color: #fa5252;
      }
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;
const InsertForm = styled.form`
  padding: 32px 32px 72px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
const Input = styled.input`
  padding: 12px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;

function TodoCreate() {
  const placeholder = '할 일을 입력 후, Enter를 누르세요';

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder={placeholder}
              autoFocus
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
