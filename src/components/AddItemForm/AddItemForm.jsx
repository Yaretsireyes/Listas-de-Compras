import { Button } from "react-bootstrap";

const AddItemForm = ({ handleShow }) => {
    return (
        <>
            <Button onClick={handleShow}>
                Agregar
            </Button>
        </>
    );
}

export default AddItemForm;