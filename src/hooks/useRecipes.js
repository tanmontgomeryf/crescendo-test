import useSWR from "swr";
import { fetcher } from "../services/fetcher";

export const useRecipes = () => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/recipes`,
    fetcher
  );

  return {
    recipes: data,
    isLoading,
    isError: error,
  };
};
