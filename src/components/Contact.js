import React, { useState, Suspense, lazy } from "react";
import './Contact.css';
const Form = lazy(() => import("./form/Form"));
const FormSuccess = lazy(() => import("./form/FormSuccess"));

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>

      <div className='contact'>
        <div className="first-gray">
        <h2 className="title-about">Get in touch <br/><span>We are hiring!</span></h2>
          {!isSubmitted ? (
          <Suspense fallback={<div className="contenedor-preloader"></div>}>
            <Form submitForm={submitForm} />
          </Suspense>
        ) : (
          
            <FormSuccess />
        )}
        </div>

        <div className="second-gray">
            <img src="/assets/images/contact.png" className="img-contact" alt="Contact"/>
        </div>
      </div>
    </>
  );
};

export default Contact;

