import React, { useState, createContext } from 'react'

const ShowElements = createContext({})

export const ShowElementsProvider = ({children}) =>{

     const[show, setShow] = useState({
          state:false,
          msg:"",
          msgAmount:'',
     })
     return (
          <ShowElements.Provider value={{
               show,
               setShow,
          }}>
               {children}
          </ShowElements.Provider>
     )

}

export default ShowElements;