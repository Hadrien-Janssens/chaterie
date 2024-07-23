import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const notify = () => toast.success("Message envoyé ! ");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE,
        "template_d8ibw66",
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail("");
          setMessage("");
          setName("");
          notify();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" relative mt-20 max-w-[500px] mx-auto w-full ">
      <img
        src={"/chat-rogolo.png"}
        width={150}
        height={150}
        alt="dessin de chat rigolo"
        className="absolute -top-16"
      />
      <div className="bg-[#97918D] p-3 relative">
        <div className="absolute border-[#B38D7D] opacity-[67%] border-b-4 border-l-4 w-32 h-full -bottom-3 -left-3"></div>
        <h3 className="text-white text-2xl font-bold mb-3">Contactez-nous</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 w-10/12 m-auto "
        >
          <div className="flex justify-between">
            <label htmlFor="name" className="text-white">
              Nom & Prénom
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={handleMessage}
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="text-black">
            <Button onSubmit={sendEmail}>Envoyer</Button>
          </div>
        </form>
        <div className="absolute border-[#B38D7D] opacity-[67%] border-t-4 border-r-4 w-32 h-full -top-3 -right-3"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
