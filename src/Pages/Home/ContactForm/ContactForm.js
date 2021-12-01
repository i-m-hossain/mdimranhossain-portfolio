import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
const service_id = "service_opy2aqc";
const template_id = "template_mb6qas8";
const user_id = "user_EbEZ0WydU3aOOkIHBOSGa";


export default function ContactForm() {
    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm(service_id, template_id, form.current, user_id)
            .then((result) => {
                if (result.status === 200) {
                    alert('Thanks for contacting me, shortly you will receive a response ')
                    const frm = document.getElementsByName('contact-form')[0];
                    frm.reset()

                };
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container className="py-5 text-light text-start" id="contactForm">
            <div className="pt-2 pb-4">
                <h2 className="heading text-center">Contact</h2>
            </div>
            <Form name="contact-form" onSubmit={sendEmail} className="mb-5" ref={form}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="your name"
                        name="user_name"
                        required
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="user_email"
                        required
                    />

                </Form.Group>
                <Form.Group

                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        required

                    />
                </Form.Group>
                <div>
                    <Button type="submit" className="px-5 bg-warning text-dark border-0">Send</Button>
                </div>
            </Form>
        </Container>
    );
}