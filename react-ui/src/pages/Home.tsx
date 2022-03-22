import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Link to="/">Navigate to home</Link>
      <br />
      <Link to="/buttons">Navigate to buttons</Link>

      <h1>HOME PAGE </h1>
    </div>
  );
};

export default Home;
