import { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
  });

  const phoneRegex = /^(?:\+251|0)9\d{8}$/;

  const isPhoneValid = phoneRegex.test(formData.phone);

  const isFormValid =
    formData.name.trim() !== "" &&
    isPhoneValid &&
    formData.area.trim() !== "";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    alert("Order submitted successfully!");
  }

  return (
    <section className="order-form">
      <h2>Delivery Details</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">TeleBirr Number</label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0911223344"
          />

          {formData.phone !== "" && !isPhoneValid && (
            <small className="error">
              Enter a valid TeleBirr number.
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="area">Delivery Area</label>

          <input
            id="area"
            name="area"
            type="text"
            value={formData.area}
            onChange={handleChange}
            placeholder="Your area"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
        >
          Place Order
        </button>
      </form>
    </section>
  );
}

export default OrderForm;