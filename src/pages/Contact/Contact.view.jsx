import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { SEOProvider } from '../../components';
import { HelmetProvider } from 'react-helmet-async';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const contactConfig = {
    YOUR_EMAIL: process.env.REACT_APP_EMAIL,
    YOUR_PHONE: "8801401254113",
    description: "Get in touch via the form below, or by emailing",
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ loading: true });

    const templateParams = {
      from_email: formData.email,
      from_name: formData.name,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <HelmetProvider>
    <Container>
      <SEOProvider />
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="12">
          <Alert
            //show={formData.show}
            variant={formData.variant}
            className={`rounded-0 co_alert ${
              formData.show ? "d-block" : "d-none"
            }`}
            onClose={() => setFormData({ show: false })}
            dismissible
          >
            <p className="my-0">{formData.alertmessage}</p>
          </Alert>
        </Col>
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              naimurrahaman82@gmail.com
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form onSubmit={handleSubmit} className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name || ""}
                  type="text"
                  required
                  onChange={handleChange}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email || ""}
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  {formData.loading ? "Sending..." : "Send"}
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
    <div className={formData.loading ? "loading-bar" : "d-none"}></div>
  </HelmetProvider>
  );
};

export default Contact;