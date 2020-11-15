import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

function Home() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Home;
