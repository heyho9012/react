import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 96px auto 32px;
  width: 512px;
  height: 768px;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
