import { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { CheckoutConsumer } from '../../providers/CheckoutProvider';
import { withRouter } from 'react-router-dom';

const CheckoutForm = ({ addCheckout, id, checkout_date, return_date, fees, updateCheckout, handleEditClose, history }) => {
  const [checkout, setCheckout] = useState({ checkout_date: "", return_date: "", fees: 0.0 })

  useEffect( () => {
    if (id) {
      setCheckout({ checkout_date, return_date, fees })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCheckout({...checkout, fees: parseFloat(checkout.fees)})
    if (id) {
      updateCheckout(id, checkout, history)
      handleEditClose()
    } else {
      addCheckout(checkout)
    }
    setCheckout({ checkout_date: "", return_date: "", fees: 0.0 })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicCheckoutDate">
          <Form.Label>Checkout Date</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="mm/dd/yyyy" 
            name="checkout_date"
            value={checkout.checkout_date}
            onChange={(e) => setCheckout({...checkout, checkout_date: e.target.value})}
          />
        </Form.Group>
      <Form.Group controlId="formBasicReturnDate">
          <Form.Label>Return Date</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="mm/dd/yyyy" 
            name="return_date"
            value={checkout.return_date}
            onChange={(e) => setCheckout({...checkout, return_date: e.target.value})}
          />
        </Form.Group>
      <Form.Group controlId="formBasicFees">
          <Form.Label>Fees</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control 
              aria-label="Amount (to the nearest dollar)" 
              name="fees"
              value={checkout.fees}
              onChange={(e) => setCheckout({...checkout, fees: e.target.value})}
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}

const ConnectedCheckoutForm = (props) => (
  <CheckoutConsumer>
    { value => <CheckoutForm {...props} {...value} /> }
  </CheckoutConsumer>
)

export default withRouter(ConnectedCheckoutForm);