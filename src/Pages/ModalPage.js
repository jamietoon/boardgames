import Modal from "../Components/Modal";
import { useState } from "react";
import NewForm from "../Components/NewForm";
import Button from "../Components/button.js";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    };

    const handleClose = () => {
        setShowModal(false);
    };

    

    const modal = <Modal onClose={handleClose}>
        <NewForm onClickSubmit={setShowModal}/>
        </Modal>


    return (
        <div>
            <Button primary onClick={handleClick}>New Entry</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;