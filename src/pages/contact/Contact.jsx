import React, { useEffect, useRef } from 'react'
import "./contact.css"
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import phone from "../../assets/telephone.png";
import mail from "../../assets/email.png"
import linkedln from "../../assets/linkedin.png"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
// Import dotenv



const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID,
                import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_REACT_APP_YOUR_PUBLIC_KEY
            ).then(
                (result) => {
                    toast.success("message is send");
                },
                (error) => {
                    toast.error("something is wrong");
                }
            );

        e.target.reset();

    }
    return (
        <>
            <section class="contact section" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>contact</h2>
                        </div>
                    </div>
                    <h3 class="contact-title">HAVE YOU ANY QUERY ?</h3>
                    <h4 class="contact-sub-title">I AM AT YOUR SERVICE</h4>
                    <div class="row">
                        {/* <!------=====contact info items start====--> */}
                        <div class="contact-info-item">
                            <div class="icon"><i class="fa fa-phone"></i></div>
                            <h4>GitHub</h4>
                            <img src={github} onClick={() => window.open('https://github.com/jradityamishra')} />

                        </div>
                        {/* <!------=====contact info items end====-->
                        <!------=====contact info items start====--> */}
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fa fa-envelope"></i></div>
                            <h4>Email</h4>
                            <img src={mail} onClick={() => window.open('jyotiradityamishra2003@gmail.com')} />
                        </div>
                        {/* <!------=====contact info items end====-->
                        <!------=====contact info items start====--> */}
                        <div class="contact-info-item padd-15 " id="linkedin">
                            <div class="icon"><i class="fa fa-linkedin"></i></div>
                            <h4>Linkedln</h4>
                            <img src={linkedln} onClick={() => window.open('https://www.linkedin.com/in/jyotiraditya-mishra-090047204/')} />
                        </div>
                        {/* <!------=====contact info items end====-->
                        <!------=====contact info items start====--> */}
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fa fa-instagram"></i></div>
                            <h4>Instagram</h4>
                            <img src={instagram} onClick={() => window.open('https://www.instagram.com/mishra_raditya/')} />
                        </div>
                        {/* <!------=====contact info items end====--> */}
                    </div>
                    <h3 class="contact-title padd-15">contact me</h3>
                    <h4 class="contact-sub-title padd-15">I AM very responsive</h4>
                    {/* <!---                conatct form                  --> */}
                    <div class="row">
                        <div class="contact-form padd-15"  >
                            <form action="" ref={form} onSubmit={sendEmail}>
                                <div class="row" >
                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input
                                                name='user_name'
                                                type="text"
                                                class="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-item col-6 padd-15">
                                        <div class="form-group">
                                            <input
                                                name='user_email'
                                                type="email"
                                                class="form-control"
                                                placeholder="email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <input
                                                name='user_subject'
                                                type="text"
                                                class="form-control"
                                                placeholder="subject"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <textarea
                                                name="user_message"
                                                class="form-control"
                                                id=""
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-item col-12 padd-15">
                                        <div class="form-group">
                                            <button type="submit" class="btn" style={{ cursor: 'pointer' }}>Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact