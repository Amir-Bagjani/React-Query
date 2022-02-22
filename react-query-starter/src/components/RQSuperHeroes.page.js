import { useState } from "react";
import { Link } from "react-router-dom";
import useQueryHook, { useAddData, useEditData, useRemoveData } from "../hooks/useQueryHook";


export const RQSuperHeroesPage = () => {
  const [name,setName] = useState("")
  const [alterEgo,setAlterEgo] = useState("")
  
 
  
  const { isLoading, data, isError, error } = useQueryHook()
  const { mutate: add } = useAddData()
  const { mutate: edit } = useEditData()
  const { mutate: remove } = useRemoveData()


  const handleAdd = () => {
    add({name, alterEgo})
    setAlterEgo("")
    setName("")
  }
  const handleEdit = (hero) => {
    edit({...hero, name: hero.name + 'edited'})
  }
  const handleRemove = (id) => {
    remove(id)
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
          <button onClick={() => handleEdit(item)}>Edit Hero</button>
          <button onClick={() => handleRemove(item.id)}>Remove Hero</button>
        </p>
      ))}

    </>
  );
};
