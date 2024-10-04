import baseApi from "../../api/baseApi";

const followApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    follow: builder.mutation({
      query: (followInfo) => ({
        url: "/follow",
        method: "POST",
        body: followInfo,
      }),
      invalidatesTags: ["Post", "User"],
    }),
    getUserInfo: builder.query({
      query: () => "/user-info",
    }),
  }),
});

export const { useFollowMutation, useGetUserInfoQuery } = followApi;
