import styled from 'styled-components';
import { Dropdown } from '../../common/Dropdown/Dropdown';
import { TextInput } from '../../common/TextInput';
import { FormButton } from './FormButton';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS,
  API_URL
} from '../../../constants/constants';
import { useFormData } from '../../providers/FormProvider';
import { useData } from '../../providers/DataProvider';
import { useCallback } from 'react';

export function Form() {
  const { formData, setFormData } = useFormData();
  const { setApiURL, setActivePage } = useData();

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let currentApiUrl = API_URL;
      for (const [key, value] of Object.entries(formData)) {
        if (value) {
          currentApiUrl =
            currentApiUrl === API_URL
              ? currentApiUrl + `?${key}=${value}`
              : currentApiUrl + `&${key}=${value}`;
        }
      }
      setApiURL(currentApiUrl);
    },
    [formData, setApiURL]
  );

  const onReset = useCallback(
    (event) => {
      event.preventDefault();
      setFormData({
        gender: '',
        status: '',
        species: '',
        type: '',
        name: ''
      });
      setActivePage(0);
      setApiURL(API_URL);
    },
    [setActivePage, setApiURL, setFormData]
  );

  return (
    <StyledForm onSubmit={onSubmit} onReset={onReset}>
      <Dropdown
        options={STATUS_OPTIONS}
        name="status"
        value={formData.status}
      />
      <Dropdown
        options={GENDER_OPTIONS}
        name="gender"
        value={formData.gender}
      />
      <Dropdown
        options={SPECIES_OPTIONS}
        name="species"
        value={formData.species}
      />
      <TextInput name="name" value={formData.name} />
      <TextInput name="type" value={formData.type} />
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
