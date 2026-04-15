import { createContext, useContext, useMemo, useState } from 'react';

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    gender: '',
    status: '',
    species: '',
    type: '',
    name: ''
  });

  const formDataValue = useMemo(
    () => ({
      formData,
      setFormData
    }),
    [formData]
  );

  return (
    <FormDataContext.Provider value={formDataValue}>
      {children}
    </FormDataContext.Provider>
  );
}

const FormDataContext = createContext({});

export const useFormData = () => useContext(FormDataContext);
