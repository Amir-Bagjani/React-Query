import { useQuery, useMutation} from "react-query";
import axios from "axios";

const fetchData = () => axios.get("http://localhost:3030/superheroes");
const addData = (hero) => axios.post("http://localhost:3030/superheroes", hero);

const useQueryHook = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchData, {
    // enabled: false,
    // select: (data) => data.data.map((i) => i.name),
    // onSuccess,
    // onError
  });
};

export const  useAddData = (onSuccess) => {
  return useMutation(addData, {
    onSuccess
  })
}

export default useQueryHook;