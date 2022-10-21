import { FC } from 'react';
import { FormFieldType } from 'types';
import { InputBox, LabelBox, StyledLabel } from './FormField.styles';

const FormField: FC<FormFieldType> = (formFieldData) => {
  const { id, label, type, placeholder, isBig, onChange, value, isError } = formFieldData;

  return (
    <InputBox isError={isError} isBig={isBig}>
      <LabelBox>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {isError && <p>{isError}</p>}
      </LabelBox>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </InputBox>
  );
};

export default FormField;
