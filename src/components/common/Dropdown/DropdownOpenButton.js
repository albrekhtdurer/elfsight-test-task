import styled from 'styled-components';
import { ReactComponent as Chevron } from '../../../assets/icons/chevron_up.svg';

export function DropdownOpenButton({ isOpen }) {
  return (
    <StyledDropdownOpenButton isOpen={isOpen} type="button">
      <Chevron
        width={15}
        height={15}
        stroke="currentColor"
        fill="transparent"
        title="Open"
      />
    </StyledDropdownOpenButton>
  );
}

const StyledDropdownOpenButton = styled.button`
  cursor: pointer;
  color: #f5f5f5;
  transform: ${({ isOpen }) => (isOpen ? 'rotateZ(180deg)' : '')};
  transition: all 0.5s ease-out;
  background-color: transparent;
  border: none;
  &:hover {
    color: #83bf46;
  }
`;
