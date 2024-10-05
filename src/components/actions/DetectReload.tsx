"use client";
import { useRefreshTokenMutation } from "@/src/redux/features/auth";
import {
  setUser,
  TUser,
  useCurrentUser,
} from "@/src/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { verifyToken } from "@/src/utils/VerifyToken";
import { useEffect } from "react";

const DetectReload = () => {
  const [getRefreshTToken] = useRefreshTokenMutation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser) as TUser;

  const handleReload = async () => {
    const res = await getRefreshTToken("").unwrap();
    let decodedUser = verifyToken(res.data) as TUser;
    dispatch(
      setUser({
        user: { ...user, status: decodedUser.status },
        token: res.data,
      })
    );
  };

  useEffect(() => {
    const [navEntry] = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];

    if (navEntry?.type === "reload") {
      // Call the function after reload
      handleReload();
    }
  }, []);

  return <></>;
};

export default DetectReload;
