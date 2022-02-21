import axios from "axios";

const client = axios.create({baseURL: 'http://localhost:3030'})

export const request = ({...options}) => {

    client.defaults.headers.common.Authorization = `Bearer token`;

    const onSuccess = (response) => response ;
    const onError = (error) => {
        //catch error and additional logging here
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}