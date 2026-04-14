import styled from 'styled-components';

export function FormButton({ type }) {
  const buttonText = type === 'submit' ? 'Apply' : 'Reset';

  return <StyledFormButton type={type}>{buttonText}</StyledFormButton>;
}

const StyledFormButton = styled.button`
  --button-color: ${({ type }) => (type === 'submit' ? '#83bf46' : '#ff5152')};
  color: var(--button-color);
  border: 1px solid var(--button-color);
  background-color: transparent;
  border-radius: 8px;
  font-size: 16px;
  max-width: 85px;
  padding: 12px 20.5px;

  &:hover {
    background-color: var(--button-color);
    color: #ffffff;
  }

  @media (max-width: 930px) {
    max-width: 70px;
    padding: 12px 13px;
  }

  @media (max-width: 600px) {
    max-width: 240px;
    padding: 12px 98px;
  }
`;
