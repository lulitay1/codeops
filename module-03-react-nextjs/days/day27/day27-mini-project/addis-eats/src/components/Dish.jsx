import propTypes from 'prop-types'

export default function Dish({ name, price, spicy, currency = "ETB" }) {
    return (
        <div className="dish">
            <h3>
                {name} {spicy===true && <span>• Spicy</span>}
            </h3>
            <p>
                {price} {currency}</p>
        </div>
    );
}

Dish.propTypes = {
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    spicy: propTypes.bool,
}