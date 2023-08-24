import { useNavigate } from "react-router-dom"


const Home = () => {
  const naviagte = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => naviagte('order-summary', {replace: true})}>Place Order</button>
      {/* <button onClick={() => naviagte('order-summary')}>Place Order</button> */}
    </div>
  )
}

export default Home