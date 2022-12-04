import { User } from 'firebase/auth';
import { ChangeEventHandler } from 'react';
import { store } from 'store';

type ImageType = { mobile: string; tablet: string; desktop: string };

export type CartType = {
  id: string;
  shortName: string;
  image: string;
  price: number;
  quantity: number;
};

export type ChildrenType = {
  children: React.ReactNode;
};

export type FormValuesType = {
  name: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  currentUser: User | null;
  handleSignIn: (values: FormValuesType) => void;
  handleSignUp: (values: FormValuesType) => void;
  handleSignOut: () => void;
};

export type ErrorContextType = {
  error: string;
  catchError: (errorCode: string) => void;
};

export type ModalContextType = {
  modalIsOpen: boolean;
  toggleModal: () => void;
};

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type IsSignInType = {
  isSignIn?: boolean;
};

export type TitleType = {
  title: string | undefined;
};

export type FormFieldType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  isBig?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  isError: string | false | undefined;
};

export type InputType = {
  isBig?: boolean;
  isError: string | false | undefined;
};

export type ProductContentType = {
  features: string;
  includedItems: Array<{ quantity: number; item: string }>;
};

export type ProductGalleryType = {
  gallery: {
    first: ImageType;
    second: ImageType;
    third: ImageType;
  };
};

export type FirstCardType = {
  patternCircles: string;
};

export type SecondCardType = {
  zx7Speaker: string;
};

export type IsOpenType = {
  isOpen: boolean;
};

export type HeroType = {
  heroImage: string;
  heroImageDesktop: string;
};

export type OthersProductsListType = {
  others: Array<{
    slug: string;
    name: string;
    image: ImageType;
  }>;
};

export type CategoryType = {
  category: string | undefined;
};

export type AccountFieldType = {
  title: string;
  content: string | undefined | null;
};

export type CategoryListItemType = {
  imageUrl: string;
  name: string;
};

export type CountType = {
  count: number;
};

export type ActionType = {
  type: string;
};

export type SuccessInformationType = {
  isOpen: boolean;
  closeSuccesInformation: () => void;
  name: string;
};

export type IsLoadingType = {
  isLoading: boolean;
};

export type GoBackLinkType = {
  location?: string;
};

export type SuccessContextType = {
  isBlocked: boolean;
  changeIsBlockedValue: () => void;
};
