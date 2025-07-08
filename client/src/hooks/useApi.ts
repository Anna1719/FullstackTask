import { useQuery } from "@tanstack/react-query";
import { getDogs } from "../api/dogsApi";

export const useDogsApi = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
    initialData: [],
  });

  return {
    dogs: data,
    isLoading,
    isError,
  };
};
