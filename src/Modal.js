import react from 'react';
import './Modal.css';

function Modal( { closeModal }) {
  return (
    <div className="Modal-Bg">
        <div className='Modal-container'>
            <h1>LOGIN</h1>
            <form>
            <input type="text" name="name" />
            </form>
            <button onClick={() => closeModal(false)}>
                CONNECT
            </button>
        </div>
    </div>
  );
}

export default Modal;
