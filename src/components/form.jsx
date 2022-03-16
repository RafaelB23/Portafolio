import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function FormFrag() {
  const [form, setForm] = useState({ to_name: "Rafael Mejia" });
  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };
  const sendEmail = async (e) => {
    await emailjs
      .send("default_service", "template_35dnyfz", form, "8hTDr2w4iazrsD8gM")
      .then(
        (result) => {
          console.log("Estado: ", result.status);
          console.log("Mensaje: ", form);
          alert("Mensaje enviado.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="formulario">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="from_email"
              id="from_email"
              placeholder="Enter your email..."
              onChange={handleChanges}
              required
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Enter your name..."
              onChange={handleChanges}
              required
            />
          </label>
          <label htmlFor="tel">
            Phone number
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number..."
              onChange={handleChanges}
            />
          </label>
          <label htmlFor="mess">
            Message
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message..."
              onChange={handleChanges}
              required
            />
          </label>
          <div className="btn">
            <button className="btn__cv justify__end" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default FormFrag;
