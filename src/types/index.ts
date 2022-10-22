import { User } from 'firebase/auth';
import { ChangeEventHandler } from 'react';
import { store } from 'store';

export type CartType = {
  id: string;
  shortName: string;
  image: string;
  productPrice: number;
  price: string;
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
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
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
    image: { mobile: string; tablet: string; desktop: string };
  }>;
};

export type ProductHeroType = {
  cartImage: string;
  name: string;
  shortName: string;
  image: { mobile: string; tablet: string; desktop: string };
  isNew: boolean;
  productPrice: number;
  price: string;
  description: string;
};

export type ProductsListType = {
  category: string | undefined;
};

export type FormType = {
  handleRedirectToCheckout: () => void;
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

export type CurrentUserEmailType = string | undefined;
