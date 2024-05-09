import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id='footer'
      aria-label='Footer'>
      <ul className='footer-nav'>
        <li className='nav-item'>
          <a
            href='https://www.linkedin.com/in/ha-anna/'
            target='_blank'
            rel='noreferrer'
            className='sns-link'>
            <Image
              src='/res/iconlinkedin.webp'
              alt='Linkedin'
              className='sns-img'
              height={35}
              width={35}
            />
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='https://github.com/ha-anna'
            target='_blank'
            rel='noreferrer'
            className='sns-link'>
            <Image
              src='/res/icongithub.webp'
              alt='Github'
              className='sns-img'
              height={35}
              width={35}
            />
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='https://codepen.io/haanna'
            target='_blank'
            rel='noreferrer'
            className='sns-link'>
            <Image
              src='/res/iconcodepen.webp'
              alt='Codepen'
              className='sns-img'
              height={35}
              width={35}
            />
          </a>
        </li>
      </ul>
      <span className='small'>Ha Anna &copy; 2024</span>
    </footer>
  );
}
