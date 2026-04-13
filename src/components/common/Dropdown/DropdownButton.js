import styled from 'styled-components';
import { ReactComponent as Chevron } from '../../../assets/icons/chevron_up.svg';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';

export function DropdownButton({ isOpen, hasValue, onClick }) {
  const Icon = (() => {
    if (hasValue) {
      return (
        <Cross
          width={20}
          height={20}
          stroke="currentColor"
          fill="transparent"
          title="Remove"
        />
      );
    }

    return (
      <Chevron
        width={10}
        height={10}
        stroke="currentColor"
        fill="transparent"
        title="Open"
      />
    );
  })();

  return (
    <StyledDropdownButton isOpen={isOpen} hasValue={hasValue} onClick={onClick}>
      {Icon}
    </StyledDropdownButton>
  );
}

const StyledDropdownButton = styled.button`
  cursor: pointer;
  color: #f5f5f5;
  transform: ${({ isOpen, hasValue }) =>
    !hasValue && isOpen ? 'rotate(180deg)' : ''};
  transition: all 0.5s ease-out;
  background-color: transparent;
  border: none;
  &:hover {
    color: #83bf46;
  }
`;
