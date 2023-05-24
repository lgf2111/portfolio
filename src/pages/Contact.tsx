import React from "react";
import Layout from "../components/Layout";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29ss0un",
        "template_809nbqj",
        e.target,
        "UNCtgHQfbRqGb8CUA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent, I'll get back to you ASAP!");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  }

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-green-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 pe-24 bg-gradient-to-r from-green-600 to-green-200 bg-[length:100%_3px] bg-no-repeat bg-bottom">
            Contact Me
          </h2>
          <form className="flex flex-col" onSubmit={sendEmail}>
            <input
              className="border ps-2 py-1"
              placeholder="Name*"
              name="name"
            />
            <div className="my-1">
              <input
                className="border me-1 ps-2 py-1"
                placeholder="Email Address*"
                name="email"
              />
              <input
                className="border ps-2 py-1"
                placeholder="Phone Numer"
                name="phone"
              />
            </div>
            <textarea
              className="border ps-2 py-1"
              placeholder="Message*"
              name="message"
            ></textarea>
            <div className="grid grid-cols-2 mt-1">
              <input
                className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm sm:w-auto py-1.5 text-center w-1/2"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
