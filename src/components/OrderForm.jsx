import React, { useState } from 'react';

export const OrderForm = ({ handleSubmitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleClickBuy = (e) => {
    e.preventDefault();
    handleSubmitForm({ name, email });
  }

  return (
    <form>
      <div className="input" >
        <input
          type="text"
          name="name"
          placeholder="Ваше Имя"
          value={name}
          onChange={handleChangeName} />
      </div>
      <div className="input" >
        <input
          type="text"
          name="email"
          placeholder="Адрес электронной почты"
          value={email}
          onChange={handleChangeEmail} />
      </div>
      <button
        className="button-buy"
        disabled={!name && !email}
        onClick={handleClickBuy} >Отправить заказ</button>
    </form>
  );
};