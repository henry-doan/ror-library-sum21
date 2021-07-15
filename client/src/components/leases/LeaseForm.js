import { useState, useEffect } from 'react';
import { LeaseConsumer } from '../../providers/LeaseProvider';
import ItemList from '../items/ItemList';

const LeaseForm = ({ addLease, match, getAvalItems, avalItems, history }) => {
  const [lease, setLease] = useState({ checkout_id: 0, item_id: 0 })

  useEffect( () => {
    let checkoutId = parseInt(match.params.checkoutId)
    setLease({...lease, checkout_id: checkoutId })
    getAvalItems(checkoutId)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let checkoutId = parseInt(match.params.checkoutId)
    let itemId = parseInt(lease.item_id)
    setLease({...lease, item_id: itemId})
    addLease(checkoutId, lease, history)
    setLease({ checkout_id: 0, item_id: 0 })
  }

  return (
    <>
      <h1>Add Lease</h1>
      <form onSubmit={handleSubmit}>
        <label>Item Leased:</label>
        <select onChange={(e) => setLease({...lease, item_id: e.target.value})}>
          { avalItems.map( i => 
            <option 
              value={i.id} 
            >
              {i.title} {i.item_type}
            </option>
          )}
        </select>
        <button type="submit">Submit</button>
      </form>
      <ItemList items={avalItems} />
    </>
  )
}

const ConnectedLeaseForm = (props) => (
  <LeaseConsumer>
    { value => <LeaseForm {...props} {...value} /> }
  </LeaseConsumer>
)

export default ConnectedLeaseForm;