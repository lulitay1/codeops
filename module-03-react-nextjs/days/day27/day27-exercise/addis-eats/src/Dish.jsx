import './assets/style.css';

function Dish({ name, price }) {
    return (
        <div className='dishes'>
            <h2>{name}</h2>
            <p>{price} ETB</p>
        </div>
    );
}

export default Dish;