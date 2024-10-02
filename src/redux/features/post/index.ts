import baseApi from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPosts: builder.query({
      query: () => "/post/popular",
    }),
  }),
});

export const { useGetPopularPostsQuery } = postApi;
