import baseApi from "../../api/baseApi";

const voteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    upvote: builder.mutation({
      query: (id) => ({
        url: `/post/upvote/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Post", "User"],
    }),
    downvote: builder.mutation({
      query: (id) => ({
        url: `/post/downvote/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Post", "User"],
    }),
  }),
});

export const { useUpvoteMutation, useDownvoteMutation } = voteApi;
