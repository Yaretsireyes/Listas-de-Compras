import { Card, Container, Table } from "react-bootstrap";
import AddItemForm from "../AddItemForm/AddItemForm";

const ShoppingList = () => {
    return (
        <>
            <Container>
                <h1 className="d-flex justify-content-center">Shoppi</h1>
                <Card className="">
                    <Card.Body>
                <AddItemForm />

                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Comprado</th>
                                    <th>Opcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>

        </>
    );
}

export default ShoppingList;