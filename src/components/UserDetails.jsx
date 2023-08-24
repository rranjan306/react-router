import { useNavigate, useParams } from "react-router-dom"


const UserDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  return (
    <div style={{margin: '20px'}}>
      Welcome User {id}
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
  )
}

export default UserDetails