import { FC } from 'react';
import { AccountFieldType } from 'types';
import { AccountFieldBox } from './AccountField.styles';

const AccountField: FC<AccountFieldType> = ({ title, content }) => {
  return (
    <AccountFieldBox>
      <h4>{title}</h4>
      <div>
        <p>{content}</p>
      </div>
    </AccountFieldBox>
  );
};

export default AccountField;
