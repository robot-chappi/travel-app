import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import emailjs from '@emailjs/browser';

import Layout from "../components/layout"
import Seo from "../components/seo"


const ContactUsEmail = () => { 

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('service_lekrzf1', 'template_gw46ni5', e.target, 'user_HzTP576v6eyCTbEflZ5D8')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset();
}

    return (
    <Layout>
      <Seo title="Text us" />
      <div className="contact-page-gtsb">
          <div className="container">
            <div className="main-page-illustration">
              <div className="row">
                  <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                    <p>Contact us :3</p>
                    Write to us!
                    </div>
                  <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
                  <StaticImage
                        src="../images/contactus-number.png"
                        className="main-page-illustration__img-img"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Person of Travel"
                        style={{ marginBottom: `1.45rem` }}
                        />
                  </div>
                </div>
              </div>
              <div className="contact-page-above">
              <div className='contact-form'>
                    <div className='row'>
                        <div className="contact-page-above_text">
                          <p data-aos="fade-up" className="our-advantages__p our-statistic_p">We will contact you soon</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xs-6 about-me__item-three'>
                            <form className='form-contact-me' onSubmit={sendEmail}>
                                <div data-aos="fade-down" className='form-contact-me-block'>
                                    <input type="text" className='form-contact-me-input' placeholder='Your name..' name='name'/>
                                </div>
                                <div data-aos="fade-up" className='form-contact-me-block'>
                                    <input type="text" className='form-contact-me-input' placeholder='Your email..' name='email'/>
                                </div>
                                <div data-aos="fade-down" className='form-contact-me-block'>
                                    <input type="text" className='form-contact-me-input' placeholder='Your subject..' name='subject'/>
                                </div>
                                <div data-aos="fade-up" className='form-contact-me-block'>
                                    <textarea type="text" className='form-contact-me-textarea' placeholder='Your message..' name='message'></textarea>
                                </div>
                                <div data-aos="fade-down" className='form-contact-me-block form-contact-me-block-btn'>
                                    <input type="submit" className='form-contact-me-btn' value="Send message"/>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xs-6 model-table'>
                            <div data-aos="fade-up">
                            <StaticImage
                                src="../images/contactus-character.png"
                                className="contact-page-illustration__img-img"
                                quality={95}
                                formats={["auto", "webp", "avif"]}
                                alt="Person of Travel"
                                style={{ marginBottom: `1.45rem` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </Layout>
  )
  }
  
export default ContactUsEmail
  