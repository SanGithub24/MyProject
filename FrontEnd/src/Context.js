import React, {createContext} from 'react'

const Cart = createContext();

function context({children}) {

  return <Cart.Provider>
    {children}
    </Cart.Provider>
}

export default context
