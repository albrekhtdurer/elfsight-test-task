import styled from 'styled-components';
import { useState } from 'react';
import { useOutsideClick } from '../../../utils/useOutsideClick';
import { DropdownClearButton } from './DropdownClearButton';
import { DropdownOpenButton } from './DropdownOpenButton';
import { useFormData } from '../../providers/FormProvider';

export function Dropdown({ options, name, value }) {
  const listContainerRef = useOutsideClick(() => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);
  const { formData, setFormData } = useFormData();
  const placeholder = name[0].toUpperCase() + name.slice(1);

  const onPlaceholderClicked = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setFormData({
      ...formData,
      [name]: value
    });
    setIsOpen(false);
  };

  const onClearButtonClicked = (e) => {
    e.stopPropagation();
    setFormData({
      ...formData,
      [name]: null
    });
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={onPlaceholderClicked}>
        <DropdownPlaceholder>{value || placeholder}</DropdownPlaceholder>
        {(!value && (
          <DropdownOpenButton isOpen={isOpen}></DropdownOpenButton>
        )) || (
          <DropdownClearButton
            onClick={onClearButtonClicked}
          ></DropdownClearButton>
        )}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer ref={listContainerRef}>
          <DropdownList>
            {options.map((option) => (
              <ListItem
                onClick={onOptionClicked(option)}
                key={option}
                isSelected={option === value}
              >
                {option}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
}

const LIST_ELEM_HEIGHT = 33;
const MAX_LIST_ELEMS = 5;

const DropdownContainer = styled.div`
  position: relative;
  max-width: 180px;

  @media (max-width: 930px) {
    max-width: 150px;
  }

  @media (max-width: 600px) {
    max-width: 240px;
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #83bf46;
  border-radius: 8px;
  background-color: #263750;
`;

const DropdownPlaceholder = styled.span`
  color: ${({ selectedOption }) => (selectedOption ? '#f5f5f5' : '#b3b3b3')};
  font-size: 16px;
`;

const DropdownListContainer = styled.div``;

const ListItem = styled.li`
  list-style: none;
  padding-top: 7px;
  padding-bottom: 7px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  &:hover {
    background-color: #83bf4620;
  }
`;

const DropdownList = styled.ul`
  margin: 5px 0 0 0;
  max-height: ${LIST_ELEM_HEIGHT * MAX_LIST_ELEMS}px;
  overflow-y: scroll;
  position: absolute;
  z-index: 10;
  width: 100%;
  padding-left: 7px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-sizing: border-box;
  color: #1e1e1e;
  font-size: 16px;
`;
