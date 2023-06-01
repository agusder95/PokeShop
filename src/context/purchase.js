import React, { useState, createContext } from 'react'

const PurchaseContext = createContext({})

export const PurchaseContextProvider = ({children}) =>{

     const[itemsBuy, setItemsBuy] = useState([])
    
     return (
          <PurchaseContext.Provider value={{
               itemsBuy,
               setItemsBuy,
          }}>
               {children}
          </PurchaseContext.Provider>
     )

}

export default PurchaseContext;