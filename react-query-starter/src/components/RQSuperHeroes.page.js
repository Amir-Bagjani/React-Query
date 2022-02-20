import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get("http://localhost:3030/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-hero", fetchData);
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {data?.data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};
