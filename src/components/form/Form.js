import React, {useState} from "react";
import ValidateForm from "./ValidateForm";
import validate from "./Validate";
import './Form.css';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = ValidateForm(
    submitForm,
    validate
  );

  return (
        <>
            <section className="contacto_container container" id="contacto">
                    <div className="form-content container">
                        <form className="form" onSubmit={handleSubmit}>
                            
                            <div className="form-row">
                                <div className="form-inputs">
                                    <label htmlFor="name" className="form-label">
                                    </label>
                                    <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-input"
                                            value={values.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                        />
                                        {errors.name && (
                                            <small className="input-error">{errors.name}</small>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="form-inputs">
                                    <label htmlFor="email" className="form-label">
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-input"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                    {errors.email && (
                                        <small className="input-error">{errors.email}</small>
                                    )}
                                </div> 

                                <div className="form-inputs">
                                        <label htmlFor="phone" className="form-label">
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className="form-input"
                                            minLength="10"
                                            maxLength="12"
                                            autoComplete="none"
                                            value={values.phone}
                                            onChange={handleChange}
                                            placeholder="Phone"
                                        ></input>
                                        {errors.phone && (
                                            <small className="input-error">{errors.phone}</small>
                                        )}
                                </div>
                            
                                <div className="form-row">
                                    <div className="form-inputs">
                                    <label htmlFor="comment" className="form-label">
                                        
                                    </label>
                                    <textarea
                                        name="comment"
                                        className="form-input"
                                        id="comment"
                                        rows="3"
                                        minLength="10"
                                        value={values.comment}
                                        onChange={handleChange}
                                        placeholder="Message"
                                    ></textarea>
                                    {errors.comment && (
                                        <small className="input-error">{errors.comment}</small>
                                    )}
                                    </div>
                                </div>
            
                                <div className="form-row" id="form-contain-btn">
                                    <button className="btn btn-primary submit form-input-btn" type="submit">
                                    Send
                                    
                                    </button>
                                </div>
                        </form>
                    </div>
            </section>
        </>
    );
};

export default Form;
