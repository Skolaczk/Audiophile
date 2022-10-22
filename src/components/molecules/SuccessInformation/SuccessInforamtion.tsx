import { ReactComponent as XMarkIcon } from 'assets/icons/xmark.svg';
import { FC } from 'react';
import { SuccessInformationType } from 'types';
import { StyledSuccesInforamtion } from './SuccessInformation.styles';

const SuccessInformation: FC<SuccessInformationType> = ({
  isOpen,
  closeSuccesInformation,
  name,
}) => {
  return (
    <StyledSuccesInforamtion isOpen={isOpen}>
      <p>Item {name} was added to cart.</p>
      <button tabIndex={!isOpen ? -1 : 1} onClick={closeSuccesInformation}>
        <XMarkIcon />
      </button>
    </StyledSuccesInforamtion>
  );
};

export default SuccessInformation;
