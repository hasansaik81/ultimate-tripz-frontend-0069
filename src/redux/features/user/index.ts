import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user-info",
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;
