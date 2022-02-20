import { useQuery } from "react-query";
import axios from "axios";

const fetchData = (id) => axios.get(`http://localhost:3030/superheroes/${id}`);

const useQueryById = (id) => {
  return useQuery(["super-hero", id], () => fetchData(id));
};

export default useQueryById;