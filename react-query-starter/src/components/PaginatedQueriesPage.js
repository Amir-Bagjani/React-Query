import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";

const fetchData = (pageNumber) =>
  axios.get(`http://localhost:3030/colors?_limit=2&_page=${pageNumber}`);

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ["colors", pageNumber],
    () => fetchData(pageNumber),
    { keepPreviousData: true }
  );

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>PaginatedQueriesPage - colors</h1>

      {data?.data?.map((color) => (
        <div key={color.id}>
          {" "}
          {color.id} - {color.label}
        </div>
      ))}
      <div>
        <button
          onClick={() => setPageNumber((prv) => prv - 1)}
          disabled={pageNumber === 1}
        >
          Previous page
        </button>
        <button
          onClick={() => setPageNumber((prv) => prv + 1)}
          disabled={pageNumber === 4}
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default PaginatedQueriesPage;
