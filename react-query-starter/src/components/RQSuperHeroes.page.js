import { Link } from "react-router-dom";
import useQueryHook from "../hooks/useQueryHook";


export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log(`success`, data);
  }
  const onError = (error) => {
    console.log(`error`, error);
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQueryHook(onSuccess, onError)


  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {data?.data.map((item) => (
        <p key={item.id}>
          <Link to={`rq-super-heroes/${item.id}`}>{item.name}</Link>
        </p>
      ))}
    </>
  );
};
