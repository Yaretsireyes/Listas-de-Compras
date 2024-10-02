import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import AddItemForm from "../AddItemForm/AddItemForm";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import { ShoppingContext } from "../../context";

const ShoppingList = () => {

    const {
        agregarCompra,
        setCompras,
        handleShow,
        show,
        handleAgregar,
        handleClose,
        compras,
    } = useContext(ShoppingContext)


    return (
        <>
            <Container>
                <h1 className="d-flex justify-content-center">Shoppi</h1>
                <Card className="">
                    <div className="d-flex justify-content-end mt-2 pb-2">
                        <AddItemForm
                            handleShow={handleShow}
                        />
                    </div>
                    <Card.Body className="bg-danger">
                        {
                            agregarCompra.map((item, index) => (
                                <ShoppingItem
                                    key={index}
                                    item={item.nombre}
                                    id={item.id}
                                    tachar={item.comprado}
                                />
                            ))
                        }
                    </Card.Body>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Shopping</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nombre de Compra</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="nombre"
                                        autoFocus
                                        onChange={(e) => setCompras(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" onClick={() => handleAgregar(compras)}>
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
            </Container>
        </>
    );
}

export default ShoppingList;