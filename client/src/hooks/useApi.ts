import { useQuery } from "@tanstack/react-query";
import { getDogs } from "@/api/dogsApi";
import { queryClient } from "@/api/queryClient";

export const useDogsApi = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
    initialData: [],
  });

  const invalidateDogs = () => queryClient.invalidateQueries({ queryKey: ["dogs"] });

  return {
    dogs: data,
    isLoading,
    isError,
    invalidateDogs,
  };
};
