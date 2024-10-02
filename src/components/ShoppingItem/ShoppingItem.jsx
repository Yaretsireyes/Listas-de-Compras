import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { ShoppingContext } from "../../context";

const ShoppingItem = ({ id, item, tachar }) => {
    console.log(tachar, 'hola')

    const {
        handleDelete,
        handleTachar
    } = useContext(ShoppingContext)

    return (
        <>
            <Table className="text-center">
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Comprado</th>
                        <th>Opcion</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className={`${tachar ? 'text-decoration-line-through' : 'none'}`}>
                        <td>{id}</td>
                        <td>{item}</td>
                        <td>
                            <i className='fs-3 bi bi-check2-square' onClick={() => handleTachar(id)}></i>
                        </td>
                        <td><Button onClick={() => handleDelete(id)}>Eliminar</Button></td>
                    </tr>
                </tbody>
            </Table >
        </>
    )
}

export default ShoppingItem;