import { useQueries } from "react-query";
import axios from "axios";

const fetchHeroes = (id) =>
  axios.get(`http://localhost:3030/superheroes/${id}`);

const DynamicParallrQueries = ({ ids }) => {
  const result = useQueries(
    ids.map((id) => ({
      queryKey: ["super-hero", id],
      queryFn: () => fetchHeroes(id),
    }))
  );

//   console.log(result);

  return (
    <div>
      <h2>dynamic ids number = {result.length}</h2>
      {result.length > 0 && result.map((item, ind) => (
        <div key={ind}>
            <p>name is: {item.data?.data.name}</p>
            <p>id is: {item.data?.data.id}</p>
            <p>alterEgo is: {item.data?.data.alterEgo}</p>
            <hr />
        </div>
      ))}
     
    </div>
  );
};

export default DynamicParallrQueries;
