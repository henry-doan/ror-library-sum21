import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <Jumbotron>
    <h1>404 - page not found</h1>
    <Link to="/">
      <Button>
        Return Home
      </Button>
    </Link>
  </Jumbotron>
)

export default Nomatch;