import Modal from "react-modal"
import { Container } from "./styles";

interface NewTransactionModalProps{
    isOpen: boolean;
    onResquestClose: ()=>void ;
}

export function NewTransactionModal({isOpen,onResquestClose}:NewTransactionModalProps) {
    return(
        
        <Modal 
        isOpen={isOpen}
        onRequestClose={onResquestClose}
        overlayClassName= 'react-modal-overlay'
        className= 'react-modal-content'
        >
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Titulo"/>
                <input type="number" placeholder= "Valor"/>
                <input type="text" placeholder="Categorias"/>
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
        
       
    );
}