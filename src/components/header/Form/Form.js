import styled from 'styled-components';
import { Dropdown } from '../../common/Dropdown/Dropdown';
import { TextInput } from '../../common/Input';
import { FormButton } from './FormButton';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '../../../constants/constants';

export function Form() {
  const onChangeInputs = (e) => {
    console.log(e.target.value);
  };

  return (
    <StyledForm>
      <Dropdown options={STATUS_OPTIONS} placeholder="Status" />
      <Dropdown options={GENDER_OPTIONS} placeholder="Gender" />
      <Dropdown options={SPECIES_OPTIONS} placeholder="Species" />
      <TextInput name="name" onChangeCallback={onChangeInputs} />
      <TextInput name="type" onChangeCallback={onChangeInputs} />
      <ButtonsContainer>
        <FormButton type="submit" />
        <FormButton type="reset" />
      </ButtonsContainer>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;
