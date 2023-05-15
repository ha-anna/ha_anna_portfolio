'use client';
import Image from 'next/image';
import React from 'react';
import { isMobile } from 'react-device-detect';
import Nav from './Nav'

export default function Header() {

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
