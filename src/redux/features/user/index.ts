import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user-info",
    }),
    getUserInfoById: builder.query({
      query: (id) => `/user-by-id/${id}`,
      providesTags: ["User", "Post"],
    }),
  }),
});

export const { useGetUserInfoQuery, useGetUserInfoByIdQuery } = userApi;
