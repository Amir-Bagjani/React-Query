import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroes = () => axios.get("http://localhost:3030/superheroes");
const fetchFriends = () => axios.get("http://localhost:3030/friends");

const ParallelQueries = () => {
  const { data: heroes } = useQuery("super-hero", fetchHeroes);
  const { data: firends } = useQuery("firends", fetchFriends);
  return (
    <div>
        
      <h2>super heroes</h2>
      {heroes?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}

      <br />

      <h2>friend</h2>
      {firends?.data.map((firend) => (
        <div key={firend.id}>{firend.name}</div>
      ))}

    </div>
  );
};

export default ParallelQueries;
