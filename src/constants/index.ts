export enum ActionTypes {
  Add = 'ADD',
  Subtract = 'SUBTRACT',
  Reset = 'RESET',
}

export enum FirebaseErrors {
  EmailInUseError = 'auth/email-already-in-use',
  UserNotFoundError = 'auth/user-not-found',
  WrongPasswordError = 'auth/wrong-password',
  TooManyRequestsError = 'auth/too-many-requests',
}

export enum ErrorMessages {
  EmailInUseMessage = 'This email already exists',
  UserNotFoundMessage = 'User not found',
  WrongPasswordMessage = 'Password is wrong',
  TooManyRequestsMessage = 'Too many requests',
  DefaultMessage = 'Something went wrong',
}
