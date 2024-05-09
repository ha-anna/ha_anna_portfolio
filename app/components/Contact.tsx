import React from 'react';
import EmailForm from './EmailForm';

export default function Contact() {
  return (
    <section
      aria-labelledby='contact'
      className='contact'>
      <h2 id='contact'>Let&apos;s talk</h2>
      <div className='contact-body'>
        <p>Have a question or want to work together?</p>
        <EmailForm />
      </div>
    </section>
  );
}
