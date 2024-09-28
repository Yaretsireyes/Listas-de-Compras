import { createContext, useState } from "react"

export const ComprasContext = createContext()

 const ShoppingListProvider = ({ children }) => {

    const [compras, setCompras] = useState([])


    return (
        <ComprasContext.Provider value={{

        }}>
            {children}
        </ComprasContext.Provider>
    )
}
export default ShoppingListProvider