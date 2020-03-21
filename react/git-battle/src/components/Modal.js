import React from 'react';
import {MainModal,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalClose} from '../assets/styles/Modal'
const Modal = (props) => {

    const modal =  <MainModal>
                        <ModalContent>
                        <ModalHeader>
                            <ModalClose>&times;</ModalClose>
                            <h2>{props.titlemodal}</h2>
                        </ModalHeader>
                        <ModalBody>
                            <p>{props.modalcontent}</p>
                            {props.children()}
                        </ModalBody>
                        <ModalFooter>
                            <button>Cancel</button>
                            <button>Submit</button>
                        </ModalFooter>
                        </ModalContent>
                    
                    </MainModal>
        return modal
    
    

}

export default Modal;