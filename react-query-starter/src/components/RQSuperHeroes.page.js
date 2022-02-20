import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => axios.get("http://localhost:3030/superheroes");


export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery("super-hero", fetchData);
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {data?.data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};
