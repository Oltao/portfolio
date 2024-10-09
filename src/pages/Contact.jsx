import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Layout from "../components/Layout";
import Form from "../components/Form";
import { contactContent } from "../text/TextContent";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnClicked(() => true);

    emailjs
      .sendForm("service_5f970v9", "template_f6vpx0n", form.current, {
        publicKey: "tH4AgdI1MNnxbA1AJ",
      })
      .then(
        () => {
          Swal.fire({
            title: "Sent Successfully!",
            text: "I will get back to you!",
            icon: "success",
            customClass: {
              popup: "bg-light text-dark dark:bg-dark dark:text-primary",
              confirmButton:
                "!bg-dark !text-primary dark:!bg-light dark:!text-dark !border-0",
            },
          });
          setBtnClicked(() => false);
          console.log("SUCCESS!");
          console.log(name, email, msg);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <Layout
      heading={contactContent.heading}
      span={contactContent.span}
      details={contactContent.details}
      hideBtn="false"
    >
      <Form
        form={form}
        sendEmail={sendEmail}
        name={(e) => setName(e.target.value)}
        email={(e) => setEmail(e.target.value)}
        message={(e) => setMsg(e.target.value)}
        btnClicked={btnClicked}
      />
    </Layout>
  );
};

export default Contact;
