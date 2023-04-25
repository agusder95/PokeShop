import React, { useState, createContext } from 'react'

const PurchaseContext = createContext({})

export const PurchaseContextProvider = ({children}) =>{

     const[items, setItems] = useState([])

     return (
          <PurchaseContext.Provider value={{
               items,
               setItems,
          }}>
               {children}
          </PurchaseContext.Provider>
     )

}

export default PurchaseContextProvider;