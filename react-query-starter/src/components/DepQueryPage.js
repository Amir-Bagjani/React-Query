import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = (email) => axios.get(`http://localhost:3030/users/${email}`)
const fetchChannel = (channelId) => axios.get(`http://localhost:3030/channels/${channelId}`)


const DepQueryPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () => fetchUser(email))
  const channelId = user?.data.channelId;
  const { data } = useQuery(['course', channelId], () => fetchChannel(channelId), {enabled: !!channelId})


  return (
    <>
        <h1>courses of {email} </h1>
        {data?.data.courses.map(course => (
            <p key={course}>  1) {course}</p>
        ))}
    </>
  )
}

export default DepQueryPage