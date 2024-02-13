export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { user: any }; // Замените 'any' на тип вашего пользователя
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: { error: string };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;