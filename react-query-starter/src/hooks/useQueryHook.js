import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => axios.get("http://localhost:3030/superheroes");

const useQueryHook = (onSuccess, onError) => {
  return useQuery("super-hero", fetchData, {
    enabled: false,
    select: (data) => data.data.map((i) => i.name),
    onSuccess,
    onError
  });
};

export default useQueryHook;