import { useState } from "react";
import { Link } from "react-router-dom";
import useQueryHook, { useAddData } from "../hooks/useQueryHook";


export const RQSuperHeroesPage = () => {
  const [name,setName] = useState("")
  const [alterEgo,setAlterEgo] = useState("")
  
 
  
  const { isLoading, data, isError, error } = useQueryHook()
  const { mutate: add } = useAddData()


  const handleAdd = () => {
    add({name, alterEgo})
    setAlterEgo("")
    setName("")
  }



  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{error.message}</p>;


  return (
    <>

      <h2>React Query Super Heroes Page</h2>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
      <button onClick={handleAdd}>Add Hero</button>

      {data?.data.map((item) => (
        <p key={item.id}>
          <Link to={`rq-super-heroes/${item.id}`}>{item.name}</Link>
        </p>
      ))}

    </>
  );
};
