import { useQuery, useMutation, useQueryClient} from "react-query";
import { request } from "../utils/axios-utils";


const fetchData = () => request({url: '/superheroes'});
const addData = (hero) => request({url: '/superheroes', method: 'post', data: hero});
const editData = (hero) => request({url: `/superheroes/${hero.id}`, method: 'put', data: hero});
const removeData = (id) => request({url: `/superheroes/${id}`, method: 'delete'});

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

export const  useEditData = () => {
  const queryClient = useQueryClient()
  return useMutation(editData, {
    onSuccess: () => {
      queryClient.invalidateQueries("super-heroes")
    }
  })
}

export const  useRemoveData = () => {
  const queryClient = useQueryClient()
  return useMutation(removeData, {
    onMutate: async(newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousData = queryClient.getQueryData("super-heroes")
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {...oldQueryData, data: oldQueryData.data.filter( i => i.id !== Number(newHero.id))}
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