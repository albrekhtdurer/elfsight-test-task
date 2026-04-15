import styled from 'styled-components';
import { Logo } from './Logo';
import { Form } from './Form/Form';
import { FormDataProvider } from '../providers/FormProvider';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <FormDataProvider>
        <Form />
      </FormDataProvider>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
