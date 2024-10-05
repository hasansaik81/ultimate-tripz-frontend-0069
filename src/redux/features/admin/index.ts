import baseApi from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getPosts: builder.query({
      query: () => "/post/all-posts",
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery } = adminApi;
