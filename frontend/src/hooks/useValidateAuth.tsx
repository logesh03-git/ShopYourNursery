import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "../apiClient/apiClient";
import { login } from "../features/auth/authSlice";
import { useEffect } from "react";

export default function useValidateAuth() {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  console.log(isAuthenticated);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["validateToken"],
    queryFn: () => validateToken(),
    retry: false,
  });
  useEffect(() => {
    if (data?.userId) {
      dispatch(login({ userId: data?.userId }));
    }
  }, [isAuthenticated, data]);

  return { data, isLoading, isSuccess };
}
