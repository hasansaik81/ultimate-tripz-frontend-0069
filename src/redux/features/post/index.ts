import baseApi from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPosts: builder.query({
      query: () => "/post/popular",
    }),
    getPostDetails: builder.query({
      query: (id) => `/post/single-post/${id}`,
    }),
    getPostByAuthor: builder.query({
      query: (id) => `/post/posts-by-author/${id}`,
    }),
    createPost: builder.mutation({
      query: (postInfo) => ({
        url: "/post/create-post",
        method: "POST",
        body: postInfo,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPopularPostsQuery,
  useGetPostDetailsQuery,
  useGetPostByAuthorQuery,
  useCreatePostMutation,
} = postApi;
