import { ReactComponent as SpinnerIcon } from 'assets/icons/spinner.svg';
import { FC } from 'react';
import { SpinnerWrapper } from './Spinner.styles';

export type PropsType = {
  isLoading: boolean;
};

const Spinner: FC<PropsType> = ({ isLoading }) => {
  return (
    <SpinnerWrapper isLoading={isLoading}>
      <SpinnerIcon />
    </SpinnerWrapper>
  );
};

export default Spinner;
