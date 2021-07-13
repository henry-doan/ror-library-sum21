import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { CheckoutConsumer } from '../../providers/CheckoutProvider';
import LeaseList from '../leases/LeaseList';

const CheckoutShow = ({ location, match, deleteCheckout, history }) => {
  const [editshow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <>
      <h1>Checkout Show # {location.state.id}</h1>
      {/* <h1>Checkout Show # {match.params.id}</h1> */}
      <p>
        Return date: {location.state.return_date}
      </p>
      <p>
        Checkout date: {location.state.checkout_date}
      </p>
      <p>
        Fees: ${location.state.fees}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteCheckout(match.params.id, history)}>Delete</Button>
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Show # {location.state.id} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CheckoutForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <LeaseList checkoutId={location.state.id} />
    </>
  )
}

const ConnectedCheckoutShow = (props) => (
  <CheckoutConsumer>
    { value => <CheckoutShow {...props} {...value} /> }
  </CheckoutConsumer>
)

export default ConnectedCheckoutShow;