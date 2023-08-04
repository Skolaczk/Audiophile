import { FC, ChangeEventHandler } from 'react';
import { InputBox, LabelBox, StyledLabel } from './FormField.styles';

type PropsType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  isBig?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  isError: string | false | undefined;
};

const FormField: FC<PropsType> = (formFieldData) => {
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
