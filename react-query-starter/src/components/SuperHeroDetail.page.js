import { useParams } from "react-router-dom";
import {useQueryById} from "../hooks/useQueryById";

const SuperHeroDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQueryById(id)

  console.log(`4`,data)

  if(isLoading) return <p>Loading...</p>

  return (
    <>
      <h1>SuperHeroDetail</h1>

      {data?.data?.name} - {data?.data?.alterEgo}
    </>
  );
};

export default SuperHeroDetail;
