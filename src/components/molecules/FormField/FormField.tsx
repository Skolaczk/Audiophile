/* eslint-disable no-constant-condition */
import { FC } from 'react';
import { InputBox, LabelBox, StyledLabel } from './FormField.styles';

type FormFieldType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

const FormField: FC<FormFieldType> = ({ id, label, type, placeholder }) => {
  return (
    <InputBox>
      <LabelBox>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {false ? <p>field cannot be empty</p> : null}
      </LabelBox>
      <input type={type} name={id} id={id} placeholder={placeholder} />
    </InputBox>
  );
};

export default FormField;
