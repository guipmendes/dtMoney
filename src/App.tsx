import {GlobalStyle} from './styles/global'
import {Header} from './components/Header/index'
import {Dashboard} from './components/Dashboard/index'
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');
export function App() {

  const [isNewTransactionModal,setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModal(true);
  };

  function handleClouseNewTransactionModal(){
    setIsNewTransactionModal(false);
  };

  return (
    <>
       <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
       <Dashboard/>
       <NewTransactionModal isOpen={isNewTransactionModal} onResquestClose={handleClouseNewTransactionModal}/>

       <GlobalStyle/>
    </>
  );
}