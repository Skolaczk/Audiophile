import { FC } from 'react';
import { AccountFieldBox } from './AccountField.styles';

export type PropsType = {
  title: string;
  content: string | undefined | null;
};

const AccountField: FC<PropsType> = ({ title, content }) => {
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
