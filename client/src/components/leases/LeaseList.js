import { useEffect } from 'react';
import { LeaseConsumer } from '../../providers/LeaseProvider';
import { Link } from 'react-router-dom';

const LeaseList = ({ checkoutId, leases, getAllLeases }) => {
  useEffect( () => {
    getAllLeases(checkoutId)
  }, [])

  return (
    <>
      { leases.length > 0 ? 
        <ul>
          { leases.map( l => 
            <li>
              <Link to={{
                pathname:  "/checkouts/" + checkoutId + "/leases/" + l.id 
              }}>
                Leases #: {l.id}
              </Link>
            </li>
          )}
        </ul>
        :
        <p>No Leases</p>
      }
    </>
  )
}

const ConnectedLeaseList = (props) => (
  <LeaseConsumer>
    { value => <LeaseList {...props} {...value} /> }
  </LeaseConsumer>
)

export default ConnectedLeaseList;