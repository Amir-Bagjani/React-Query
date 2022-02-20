import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchData = () => axios.get("http://localhost:3030/superheroes");

export const RQSuperHeroesPage = () => {
  const [interval,setInterval] = useState(2000)
  const onSuccess = (data) =>{
    console.log(`Success`, data) 
    if(data.data.length >= 4) setInterval(false)
  }
  const onError = (error) => {
    console.log(`Success`, error);
    setInterval(false)
  }
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-hero",
    fetchData,
    { 
      refetchInterval: interval,
      onSuccess,
      onError
    }
  );

  console.log({ isFetching, isLoading });

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {/* <button onClick={refetch}>Fetch Data</button> */}
      {(isLoading || isFetching) && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {data?.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};
