import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CheckoutContext = React.createContext();

export const CheckoutConsumer = CheckoutContext.Consumer;

const CheckoutProvider = ({ children }) => {
  const [checkouts, setCheckouts] = useState([])

  const getAllCheckouts = () => {
    axios.get("/api/checkouts")
      .then( res => {
        setCheckouts(res.data)
      })
      .catch( err => console.log(err) )
  }

  const addCheckout = (checkout) => {
    axios.post("/api/checkouts", { checkout })
      .then( res => {
        setCheckouts([...checkouts, res.data])
      })
      .catch( err => console.log(err) )
  }

  const updateCheckout = (id, checkout, history) => {
    axios.put(`/api/checkouts/${id}`, { checkout })
      .then( res => {
        const updatededCheckouts = checkouts.map( c => {
          if (c.id == id) {
            return res.data
          }
          return c
        })
        setCheckouts(updatededCheckouts)
        history.push("/checkouts")
      })
      .catch( err => console.log(err) )
  }

  const deleteCheckout = (id, history) => {
    axios.delete(`/api/checkouts/${id}`)
      .then( res => {
        setCheckouts(checkouts.filter( c => c.id !== id))
        alert(res.data.message)
        history.push("/checkouts")
      })
      .catch( err => console.log(err) )
  }

  return (
    <CheckoutContext.Provider value={{
      checkouts,
      getAllCheckouts: getAllCheckouts,
      addCheckout: addCheckout,
      updateCheckout: updateCheckout,
      deleteCheckout: deleteCheckout,
    }}>
      { children }
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider;