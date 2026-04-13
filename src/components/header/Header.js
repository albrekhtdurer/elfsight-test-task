import styled from 'styled-components';
import { Logo } from './Logo';
import { Dropdown } from '../common/Dropdown';

export function Header() {
  const ddOptions = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8'
  ];

  return (
    <HeaderContainer>
      <Logo />
      <Dropdown options={ddOptions} placeholder="Selector"></Dropdown>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
