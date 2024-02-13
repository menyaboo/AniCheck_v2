import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000//api/user' }), // Замените '/api/' на ваш базовый URL
  endpoints: (builder) => ({
    registerUser: builder.mutation<void, RegistrationRequest>({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;