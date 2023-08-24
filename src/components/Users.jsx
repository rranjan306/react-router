import { Link, useSearchParams } from "react-router-dom"

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActiveUser = searchParams.get('filter') === 'active' ? true : false;
  return (
    <div>
      <h2>Params:</h2>
      <nav>
        <Link to='/users/1'>User1</Link>
        <Link to='/users/2'>User2</Link>
        <Link to='/users/3'>User3</Link>
      </nav>

      <h2>Query Params:</h2>
      <button onClick={() => setSearchParams({name: 'deepak', filter: 'active'})}>Active Users</button>
      <button onClick={() => setSearchParams({})}>Reset Filters</button>
      {
        isActiveUser ? <h4 style={{marginTop: '20px', color: 'green'}}>User is actived</h4> : <h4>Showing all users</h4>
      }
    </div>
  )
}

export default Users