import { ReactComponent as SpinnerIcon } from 'assets/icons/spinner.svg';
import { FC } from 'react';
import { IsLoadingType } from 'types';
import { SpinnerWrapper } from './Spinner.styles';

const Spinner: FC<IsLoadingType> = ({ isLoading }) => {
  return (
    <SpinnerWrapper isLoading={isLoading}>
      <SpinnerIcon />
    </SpinnerWrapper>
  );
};

export default Spinner;
