import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { LeaseConsumer } from '../../providers/LeaseProvider';
import ItemList from '../items/ItemList';

const LeaseForm = ({ addLease, match, getAvalItems, avalItems }) => {
  const [lease, setLease] = useState({ checkout_id: 0, item_id: 0 })

  useEffect( () => {
    let checkoutId = parseInt(match.params.checkoutId)
    setLease({...lease, checkout_id: checkoutId })
    getAvalItems(checkoutId)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // set the parent id
    // addLease( , lease)

  }

  return (
    <>
      <ItemList items={avalItems} />
      <Form onSubmit={handleSubmit}>

      </Form>
    </>
  )
}

const ConnectedLeaseForm = (props) => (
  <LeaseConsumer>
    { value => <LeaseForm {...props} {...value} /> }
  </LeaseConsumer>
)

export default ConnectedLeaseForm;