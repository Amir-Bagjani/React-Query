import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => axios.get("http://localhost:3030/superheroes");

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-hero",
    fetchData,
    { refetchOnMount: 'always', //the best option is true
      staleTime: 3000
    }
  );
  console.log({ isFetching, isLoading });
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {data?.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};
