import { useQuery, useMutation, useQueryClient} from "react-query";
import { request } from "../utils/axios-utils";


const fetchData = () => request({url: '/superheroes'});
const addData = (hero) => request({url: '/superheroes', method: 'post', data: hero});

const useQueryHook = () => {
  return useQuery("super-heroes", fetchData);
};

export const  useAddData = () => {
  const queryClient = useQueryClient()
  return useMutation(addData, {
    onMutate: async(newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousData = queryClient.getQueryData("super-heroes")
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {...oldQueryData, data: [...oldQueryData.data, {id: Math.random(), newHero}]}
      })
      return {previousData}
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes")
    },
  })
}



export default useQueryHook;