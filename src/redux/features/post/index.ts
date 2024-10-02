import baseApi from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPosts: builder.query({
      query: () => "/post/popular",
    }),
    getPostDetails: builder.query({
      query: (id) => `/post/single-post/${id}`,
    }),
  }),
});

export const { useGetPopularPostsQuery, useGetPostDetailsQuery } = postApi;
