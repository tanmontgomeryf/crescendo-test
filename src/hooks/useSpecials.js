import useSWR from "swr";
import { fetcher } from "../services/fetcher";

export const useSpecials = () => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/specials`,
    fetcher
  );

  return {
    specials: data,
    isLoading,
    isError: error,
  };
};
