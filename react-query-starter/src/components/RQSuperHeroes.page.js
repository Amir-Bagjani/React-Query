import useQueryHook from "../hooks/useQueryHook";


export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log(`success`, data);
  }
  const onError = (error) => {
    console.log(`error`, error);
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQueryHook(onSuccess, onError)

  console.log({ isFetching, isLoading });

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Data</button>
      {(isLoading || isFetching) && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {/* {data?.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))} */}
      {data?.map(hero => (
        <div key={hero}>{hero}</div>
      ))}
    </>
  );
};
