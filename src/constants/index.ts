export enum ActionTypes {
  Add = 'ADD',
  Subtract = 'SUBTRACT',
  Reset = 'RESET',
}

export enum FirebaseErrors {
  EmailInUseError = 'auth/email-already-in-use',
  UserNotFoundError = 'auth/user-not-found',
}

export enum ErrorMessages {
  EmailInUseMessage = 'This email already exists',
  UserNotFoundMessage = 'User not found',
  DefaultMessage = 'Something went wrong',
}
