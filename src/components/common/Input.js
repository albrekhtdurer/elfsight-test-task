import { useState } from 'react';
import styled from 'styled-components';

export function TextInput({ name, onChangeCallback }) {
  const [value, setValue] = useState('');
  const capitalizedName = name[0].toUpperCase() + name.slice(1);
  const onChange = (event) => {
    setValue(event.target.value);
    onChangeCallback(event);
  };

  return (
    <StyledTextInput
      value={value}
      label={name}
      name={name}
      placeholder={capitalizedName}
      onChange={onChange}
      type="text"
    ></StyledTextInput>
  );
}

const StyledTextInput = styled.input`
  border: 1px solid #83bf46;
  border-radius: 8px;
  padding: 12px 16px;
  overflow: hidden;
  color: ${({ value }) => (value ? '#f5f5f5' : '#b3b3b3')};
  font-size: 16px;
  text-overflow: ellipsis;
  background-color: #263750;
  white-space: nowrap;
  max-width: 180px;

  @media (max-width: 930px) {
    max-width: 150px;
  }

  @media (max-width: 600px) {
    max-width: 240px;
  }
`;
