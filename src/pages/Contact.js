import React from 'react';

import '../styles/Contact.css'
const Contact = () => {
  return ( 
    <div className="contact-page">
      <h1 className="page-title">Dane kontaktowe</h1>
      <div className="wrap-detail">
      <p className="contact-detail">Numer telefonu: <strong>+48 555-666-888</strong></p>
      <p className="contact-detail">Adres email: <strong>oszamto@szamaj.pl</strong></p>
      <p className="contact-detail">Facebook: <strong>fb.oszamto.pl</strong></p>
      <p className="contact-detail">Twitter: <strong>twitter.oszamto.twit.com</strong></p>
      </div>
    </div>
   );
}
 
export default Contact;