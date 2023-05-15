'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Nav from './Nav'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi|Android/i.test(userAgent));
  }, []);

  const isHeader = () => {
    if (isMobile) {
      return { backgroundImage: `url('')` };
    } else {
      return;
    }
  };

  return (
    <header
      id="top"
      style={isHeader()}>
      <Nav />
      <span id="title">
        <span className="block block-web">Hello, </span>
        <span className="block">I am </span>
        <span className="block">Ha </span>
        <span className="block">Anna</span>
      </span>
      <p className="title-desc">
        front-end <span className="role">developer</span> and{' '}
        <span className="role">designer</span> based in Seoul, KR
      </p>
    </header>
  );
}
