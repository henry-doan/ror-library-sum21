import { Jumbotron } from 'react-bootstrap';
import CheckoutList from './CheckoutList';
import CheckoutForm from './CheckoutForm';

const Checkouts = () => (
  <>
    <Jumbotron>
      <h1>Checkouts Page</h1>
    </Jumbotron>
    <CheckoutForm />
    <CheckoutList />
  </>
)

export default Checkouts;