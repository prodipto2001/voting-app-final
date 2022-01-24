import react from 'react';
import './Card.css';

function Card() {
  return (
    <div className="card">
        <img src = 'https://images.app.goo.gl/5eCq6baTLnsfSskL6' />
        <h1>John Doe</h1>
        <button>VOTE</button>
    </div>
    );
}

export default Card;