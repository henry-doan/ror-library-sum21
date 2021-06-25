import { useEffect } from 'react';
import { CheckoutConsumer } from '../../providers/CheckoutProvider';
import { ListGroup } from 'react-bootstrap';

const CheckoutList = ({ checkouts, getAllCheckouts }) => {
  
  useEffect( () => {
    getAllCheckouts()
  }, [])

  return (
    <>
      <ListGroup>
        { checkouts.map( c => 
          <ListGroup.Item>Checkout during: {c.checkout_date}</ListGroup.Item>
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