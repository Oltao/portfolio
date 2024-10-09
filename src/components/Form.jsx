import React from "react";
import Button from "./Button";

const Form = ({ form, sendEmail, name, email, message, btnClicked }) => {
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
      <input
        className="p-2 w-96 h-16 bg-primary border-4 border-dark dark:bg-dark dark:border-primary"
        type="text"
        name="user_name"
        placeholder="Enter your name"
        onChange={name}
        required
      />

      <input
        className="p-2 w-96 h-16 bg-primary border-4 border-dark dark:bg-dark dark:border-primary"
        type="email"
        name="user_email"
        placeholder="Enter your email"
        onChange={email}
        required
      />

      <textarea
        className="p-2 w-96 h-32 bg-primary border-4 border-dark dark:bg-dark dark:border-primary"
        name="message"
        placeholder="Message"
        onChange={message}
        required
      />

      <Button>{btnClicked && <div class="loader"></div>}CONNECT</Button>
    </form>
  );
};

export default Form;
