import react, { useState }from 'react';
import './Homepage.css';
import Card from './Card';
import Modal from './Modal';

function Homepage() {

    const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        <div className="Header">
            <h1>VOTING APP</h1>
            <button onClick={() => {setOpenModal(true); console.log('ok');}}
            >CONNECT
            </button>       
        </div>
        <div className='Body'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        {openModal && <Modal closeModal={setOpenModal} />}
        
    </div>
  );
}

export default Homepage;
