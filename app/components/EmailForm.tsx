import React from 'react';

export default function EmailForm() {
  return (
    <form
      className='contact-form'
      action='https://formsubmit.co/4c8ea6571cba26a03034d10af6d3fa8a'
      method='POST'>
      <label htmlFor='email'>E-mail: </label>
      <input
        className='contact-input'
        id='email'
        type='email'
        name='email'
      />

      <label htmlFor='name'>Name: </label>
      <input
        className='contact-input'
        id='name'
        type='text'
        name='name'
      />

      <label htmlFor='message'>Message: </label>
      <textarea
        className='contact-input'
        id='message'
        name='message'
      />

      <input
        type='hidden'
        name='_blacklist'
        value='spammy pattern, banned term, phrase'
      />
      <input
        type='text'
        name='_honey'
        style={{ display: 'none' }}
      />

      <button
        className='btn'
        type='submit'>
        Message Me
      </button>
    </form>
  );
}
