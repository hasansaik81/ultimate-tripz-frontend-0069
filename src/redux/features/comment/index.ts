import baseApi from "../../api/baseApi";

const CommentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query({
      query: (id) => `/comment/post/${id}`,
      providesTags: ["Comment"],
    }),
    postComment: builder.mutation({
      query: ({ id, commentInfo }) => {
        // console.log(id, commentInfo);
        return {
          url: `/comment/${id}`,
          method: "POST",
          body: commentInfo,
        };
      },
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const { useGetCommentsByPostIdQuery, usePostCommentMutation } =
  CommentApi;
