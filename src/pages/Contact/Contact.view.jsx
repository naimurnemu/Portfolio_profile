import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SEOProvider } from "../../components";
import { HelmetProvider } from "react-helmet-async";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { GiPostOffice } from "react-icons/gi";


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
        <SEOProvider title="Contact" />
        <div className="footer-bg">
          <div className="container">
            <div className="row g-4">
              <div className="py-5 pt-5 pb-5 pb-0 col-sm-12 col-md-8 text-md-start order-1">
                <h1 className="fw-medium">
                  Let's <span className="text-danger">talk</span>
                </h1>
                <h6 className="text-secondary">
                  Please feel free to reach out by utilizing the contact form provided below.
                </h6>
                <Form className="mt-4 contact__form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      className="bg-dark border-0 input_box"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name || ""}
                      placeholder="Enter Your Name"
                      required
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      className="bg-dark border-0 input_box"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.email || ""}
                      required
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      className="bg-dark border-0 input_box p-3"
                      id="message"
                      name="message"
                      placeholder="Enter Message"
                      as="textarea"
                      rows={4}
                      value={formData.message}
                      required
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </Form.Group>
                  <div className="text-end">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="text-warningpx-3 py-2 px-5 rounded-1"
                    >
                      Send
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="col-sm-12 col-md-4 text-md-start px-2 px-md-5 pt-md-5 pt-0 align-self-start">
                <div>
                  <h1 className="fw-medium">
                    Contact
                  </h1>
                  <div className="text-secondary ps-1">
                    <p className="p-text pt-2"><MdEmail size={25} />&nbsp; naimurrahaman82@gmail.com</p>
                    <p className="p-text"><BsTelephonePlusFill size={22} />&nbsp;&nbsp; 8801401254113</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="fw-medium pt-md-5 pt-0">
                    Based <span className="text-danger">in</span>
                  </h1>
                  <div className="text-secondary ps-2">
                    <p className="p-text pt-3"><HiLocationMarker size={25} />&nbsp; Dhaka, Bangladesh</p>
                    <p className="p-text d-flex align-items-center"><GiPostOffice size={22} />&nbsp;&nbsp; <span>Zipcode - 1902</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormData({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};

export default Contact;