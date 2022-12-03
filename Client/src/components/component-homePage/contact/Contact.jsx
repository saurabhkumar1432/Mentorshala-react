import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
const Contact = () => {
  const form =useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_yr42bsg','template_umf7bwu',form.current,'wDG8VVJ_sCoFFU19a')
    .then((result)=>{
      console.log(result.text);
    },(error)=>{
      console.log(error.text);
    });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <section className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>abhishek.k@iits.in</h5>
            <a href="mailto:abhishek.k@iiits.in" >Send a message</a>
          </section>
          <section className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>GithuB</h5>
            <a href="https://github.com/AbhishekSingh581/https---github.com-AbhishekSingh581-MentorShala-React" >Send a message</a>
          </section>
          <section className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9310790069</h5>
            <a href="https://api.whatsapp.com/send?phone=+919310790069">Send a message</a>
          </section>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your Full Name' required />
          <input type="email" name='email' placeholder='yoursemail@gmail.com' required />
          <input type="Subject" name='subject' placeholder='Subject' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact