import FetchMebel from "../api/FetchMebel";
import { useQuery } from "@tanstack/react-query";

export const useGetMebel = () =>
  useQuery({
    queryKey: ["mebel"],
    queryFn: FetchMebel,
  });
