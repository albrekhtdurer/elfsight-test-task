import styled from 'styled-components';
import { Dropdown } from '../../common/Dropdown/Dropdown';
import { TextInput } from '../../common/Input';
import { FormButton } from './FormButton';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '../../../constants/constants';
import { useFormData } from '../../providers/FormProvider';

export function Form() {
  const { formData } = useFormData();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Dropdown options={STATUS_OPTIONS} name="status" />
      <Dropdown options={GENDER_OPTIONS} name="gender" />
      <Dropdown options={SPECIES_OPTIONS} name="species" />
      <TextInput name="name" />
      <TextInput name="type" />
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
