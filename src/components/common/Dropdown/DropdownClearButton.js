import styled from 'styled-components';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';

export function DropdownClearButton({ onClick }) {
  return (
    <StyledDropdownClearButton onClick={onClick}>
      <Cross
        width={15}
        height={15}
        stroke="currentColor"
        fill="transparent"
        title="Remove"
      />
    </StyledDropdownClearButton>
  );
}

const StyledDropdownClearButton = styled.button`
  cursor: pointer;
  color: #f5f5f5;
  padding: 0;
  margin: 0;
  transition: all 0.5s ease-out;
  background-color: transparent;
  border: none;
  &:hover {
    color: #83bf46;
  }
`;
