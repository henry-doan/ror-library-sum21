import React, { useState } from 'react';
import axios from 'axios';

export const LeaseContext = React.createContext();

export const LeaseConsumer = LeaseContext.Consumer;

const LeaseProvider = ({ children }) => {
  const [leases, setLeases] = useState([])
  const [avalItems, setItems] = useState([])

  const getAllLeases = (checkoutId) => {
    axios.get(`/api/checkouts/${checkoutId}/leases`)
      .then( res => {
        setLeases(res.data)
      })
      .catch( err => console.log(err) )
  }

  const addLease = (checkoutId, lease, history) => {
    axios.post(`/api/checkouts/${checkoutId}/leases`, { lease })
      .then( res => {
        setLeases([ ...leases, res.data ])
        history.push(`/checkouts/`)
      })
      .catch( err => console.log(err) )
  }

  const updateLease = (checkoutId, id, lease) => {
    axios.put(`/api/checkouts/${checkoutId}/leases/${id}`, { lease })
      .then( res => {
        const updatedLeases = leases.map( l => {
          if (l.id === id) {
            return res.data
          }
          return l
        })
        setLeases(updatedLeases)
      })
      .catch( err => console.log(err) )
  }

  const deleteLease = (checkoutId, id) => {
    axios.delete(`/api/checkouts/${checkoutId}/leases/${id}`)
      .then( res => {
        setLeases(leases.filter( l => l.id !== id))
      })
      .catch( err => console.log(err) )
  }

  const getAvalItems = (checkoutId) => {
    axios.get(`/api/checkouts/${checkoutId}/avalItems`)
      .then( res => {
        setItems(res.data)
      })
      .catch( err => console.log(err) )
  }

  return(
    <LeaseContext.Provider value={{
      leases,
      avalItems, 
      getAllLeases: getAllLeases,
      addLease: addLease,
      updateLease: updateLease,
      deleteLease: deleteLease,
      getAvalItems: getAvalItems,
    }}>
      { children }
    </LeaseContext.Provider>
  )
}

export default LeaseProvider;