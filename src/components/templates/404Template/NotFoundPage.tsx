import { ButtonLink } from 'components/atoms/Button/ButtonLink';
import { Wrapper } from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h2>Opss! Something went wrong</h2>
      <p>
        The page you were looking for could not be found. It might have been removed, renamed, or
        did not exist in first place.
      </p>
      <ButtonLink to='/'>Go back</ButtonLink>
    </Wrapper>
  );
};

export default NotFoundPage;
