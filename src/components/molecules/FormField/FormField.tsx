import { ChangeEventHandler, FC } from 'react';
import { InputBox, LabelBox, StyledLabel } from './FormField.styles';

type FormFieldType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  isBig?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  isError: string | false | undefined;
};

const FormField: FC<FormFieldType> = ({
  id,
  label,
  type,
  placeholder,
  isBig,
  onChange,
  value,
  isError,
}) => {
  return (
    <InputBox isError={isError} isBig={isBig}>
      <LabelBox>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {isError ? <p>{isError}</p> : null}
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
