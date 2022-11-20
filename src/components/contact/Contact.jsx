import React, { useEffect, useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";


const Contact = () => {
  const [pending, setPending] = useState(false);


  const sendMail = (e) => {
    e.preventDefault();
    setPending(true);


    emailjs
      .sendForm(
        "service_s33q0nk",
        "template_wwl2jyo",
        e.target,
        "user_F1KvHoYXiTu1HRN9fVl8g"
      )
      .then(
        (result) => {
          setTimeout(() => {
            toast.success("Message Sent Successfully.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }, 2000);
          setTimeout(() => {
            e.target.reset();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setTimeout(() => {
            toast.error("Unexpected Error.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }, 2000);
        }
      );
  };

    useEffect(() => {
      setTimeout(() => {
        if (pending) {
          setPending(false);
        }
      }, 4000);
    }, [pending]);
  return (
    <section id="contact">
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>okoyedennis7@gmail.com</h5>
            <a
              href="mailto:Okoyedennis7@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Dennis Okoye</h5>
            <a
              href="https://m.me/okoye.chibuike.dennis"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option" target="_blank">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>Dennis Okoye</h5>
            <a
              href="https://wa.me/+2348128885947"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
            {/* <a href="https://api.whatsapp.com/send?phone=08128885947" target="_blank">
              Send a message
            </a> */}
          </article>
        </div>
        <form onSubmit={(e) => sendMail(e)}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            {pending ? <div>Sending...</div> : <div>Send Message</div>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
