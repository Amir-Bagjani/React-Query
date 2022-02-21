import { useQuery, useMutation, useQueryClient} from "react-query";
import axios from "axios";

const fetchData = () => axios.get("http://localhost:3030/superheroes");
const addData = (hero) => axios.post("http://localhost:3030/superheroes", hero);

const useQueryHook = () => {
  return useQuery("super-heroes", fetchData);
};

export const  useAddData = () => {
  const queryClient = useQueryClient()
  return useMutation(addData, {
    onSuccess: () => {
      queryClient.invalidateQueries("super-heroes")
    }
  })
}



export default useQueryHook;