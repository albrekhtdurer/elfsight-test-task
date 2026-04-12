import styled from 'styled-components';

export function TextInput({ value, label, name, placeholder, onChange }) {
  return (
    <StyledTextInput
      value={value}
      label={label}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type="text"
    ></StyledTextInput>
  );
}

const StyledTextInput = styled.input`
  max-width: 180px;
  border: 1px solid #83bf46;
  border-radius: 4px;
  padding: 12px 16px;
  overflow: hidden;
  color: ${({ value }) => (value ? '#f5f5f5' : '#b3b3b3')};
  font-size: 16px;
  text-overflow: ellipsis;
  background-color: #263750;
  white-space: nowrap;
`;
