import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section
      aria-labelledby='about'
      className='about'>
      <h2 id='about'>About</h2>
      <div className='about-body'>
        <div className='about-basic'>
          <Image
            className='about-img'
            src='/res/avatar.webp'
            alt='Memoji of Anna doing a V sign'
            width={300}
            height={300}
          />
          <h3 className='name'>Anna Ha</h3>
          <p>Seoul, South Korea</p>
          <p>anna@haanna.com</p>
          <div className='about-links'>
            <a
              href='https://www.linkedin.com/in/ha-anna/'
              target='_blank'
              className='btn'
              rel='noreferrer'>
              LinkedIn
            </a>
            <a
              href='https://blog.haanna.com'
              target='_blank'
              className='btn'
              rel='noreferrer'>
              My Blog
            </a>
          </div>
        </div>

        <div className='about-more'>
          <p className='about-desc'>
            I have been a part of the Internet crowd all my life, making blog
            themes as a teenager, creating graphics for various causes and
            events, and even writing my master thesis about emoji. Because I
            enjoy solving problems and being creative, becoming a front-end
            designer was an easy choice to make.
          </p>
          <p className='about-desc'>
            Currently, I am a co-host of the weekly{' '}
            <a
              href='https://www.meetup.com/fccseoul/'
              className='text-link'
              rel='noreferrer'
              target='_blank'>
              FreeCodeCamp Seoul meetups
            </a>
            , learning Korean Sign Language and working on{' '}
            <a
              href='https://artemis--app.vercel.app/'
              className='text-link'
              rel='noreferrer'
              target='_blank'>
              the Artemis project
            </a>
            , aimed to connect people and unite them to help stray animals.
          </p>

          <div className='hashtag-group'>
            <span className='hashtag'>#frontend</span>
            <span className='hashtag'>#backend</span>
            <span className='hashtag'>#design</span>
            <span className='hashtag'>#ux/ui</span>
            <span className='hashtag'>#accessibility</span>
          </div>
          <h3>Skills</h3>
          <div className='hashtag-group'>
            <span className='hashtag'>#javascript</span>
            <span className='hashtag'>#react</span>
            <span className='hashtag'>#vue.js</span>
            <span className='hashtag'>#flutter</span>
            <span className='hashtag'>#typescript</span>
            <span className='hashtag'>#python</span>
            <span className='hashtag'>#node.js</span>
            <span className='hashtag'>#mongoDB</span>
          </div>
          <h3>Tools</h3>
          <div className='hashtag-group'>
            <span className='hashtag'>#illustrator</span>
            <span className='hashtag'>#figma</span>
            <span className='hashtag'>#datadog</span>
            <span className='hashtag'>#postman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
