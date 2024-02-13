import { Reducer } from 'redux';
import { AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../actions/';

interface AuthState {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggingIn: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer: Reducer<AuthState, AuthActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;