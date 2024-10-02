import { createContext, useState } from "react"

export const ShoppingContext = createContext()

export const ShoppingListProvider = ({ children }) => {

    const [compras, setCompras] = useState('')
    const [agregarCompra, setAgregarCompras] = useState([])
    // const [comprado, setComprado] = useState('text-decoration-none')

    const [id, setId] = useState(0)

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleAgregar = (name) => {
        const compras = { id: id, nombre: name, comprado: false }
        setAgregarCompras([...agregarCompra, compras])
        setId(id + 1)
        handleClose(true)
    }


    const handleDelete = (id) => {
        const compraId = agregarCompra.filter(
            (compra) => compra.id !== id)
        setAgregarCompras(compraId)
    }


    const handleTachar = (id) => {
        console.log(id, 'id')
        const tachar = agregarCompra.map((item) => {
            if (item.id === id) {
                item.comprado = !item.comprado
                return item
            }else{
                return item
            }
        })
        console.log(tachar)
        setAgregarCompras([...tachar])
    }


    return (
        <ShoppingContext.Provider value={{
            compras,
            setCompras,
            handleDelete,
            handleShow,
            handleAgregar,
            handleClose,
            agregarCompra,
            show,
            handleTachar,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}


