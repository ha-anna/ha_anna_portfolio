import Image from 'next/image';

export default function Nav() {
  function toggle() {
    document.body.classList.toggle('nav-open');
    document.body.classList.toggle('nav-height');
  }

  function close() {
    document.body.classList.remove('nav-open');
    document.body.classList.remove('nav-height');
  }

  return (
  <>
    <a
        className="logo-link"
        href=".">
        <Image
          alt="Ha Anna"
          src="/res/logowebsm.webp"
          className="logo"
          width={50}
          height={46}
        />
      </a>

      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggle}>
        <span className="hamburger"></span>
      </button>
      <nav id="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <a
              href="./#top"
              className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              href="./#about"
              className="nav-link"
              onClick={close}>
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              href="./#projects"
              className="nav-link"
              onClick={close}>
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a
              href="./#blog"
              className="nav-link"
              onClick={close}>
              Blog
            </a>
          </li>

          <li className="nav-item">
            <a
              href="./#contact"
              className="nav-link"
              onClick={close}>
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </nav>
  </>
  );
}