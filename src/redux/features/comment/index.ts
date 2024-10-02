import baseApi from "../../api/baseApi";

const CommentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query({
      query: (id) => `/comment/post/${id}`,
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = CommentApi;
