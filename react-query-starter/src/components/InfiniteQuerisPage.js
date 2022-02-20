import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchData = ({ pageParam = 1 }) =>
  axios.get(`http://localhost:3030/colors?_limit=2&_page=${pageParam}`);

const InfiniteQuerisPage = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(["colors"], fetchData, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <div>InfiniteQuerisPage</div>
      {data?.pages.map((group, ind) => (
        <Fragment key={ind}>
          {group.data.map(color => (
            <h2 key={color.id}>{color.id} - {color.label}</h2>
          ))}
        </Fragment>
      ))}
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>Load More</button>
      </div>
      <div>{!isFetchingNextPage && isFetching ? 'Fetching...' : null}</div>
    </>
  );
};

export default InfiniteQuerisPage;
