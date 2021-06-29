import { useEffect } from 'react';
import { CheckoutConsumer } from '../../providers/CheckoutProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckoutList = ({ checkouts, getAllCheckouts }) => {
  
  useEffect( () => {
    getAllCheckouts()
  }, [])

  return (
    <>
      <ListGroup>
        { checkouts.map( c => 
          <Link to={{
            pathname: `/checkouts/${c.id}`,
            state: { ...c }
          }}>
            <ListGroup.Item>Checkout during: {c.checkout_date}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

const ConnectedCheckoutList = (props) => (
  <CheckoutConsumer>
    { value => 
      <CheckoutList {...props} {...value} />
    }
  </CheckoutConsumer>
)

export default ConnectedCheckoutList;