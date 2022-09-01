export enum AppRoute {
  SignIn = '/',
  Contacts = '/contacts',
}

export enum APIRoute {
  Contacts = '/contacts',
  Login = '/login'
}
  
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTPCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  Contacts = 'CONTACTS',
  User = 'USER',
}

export enum FetchStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum SendStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}
