import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/steven.jpg`} alt="" />
      </Link>
      <header>
        <h2>Steven Kam</h2>
        <p><a href="mailto:Stevenkam@cmu.edu">stevenkam@cmu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Steven. I like building things.
        I am a <a href="https://www.cs.cmu.edu/">Carnegie Mellon</a> student studying Computer Science
        I am currently a SDE Intern at <a href="https://www.amazon.com/">Amazon</a>, and before Amazon
        I was at <a href="https://www.optum.com//">Optum</a>
        , <a href="https://www.cmuautonomous.org/">CMU CAR</a>
        , and <a href="https://ipsf.net/irvine-cubesat/#irvine-cubesat">Irvine CubeSat</a>.
        I have always been fascinated by the power of technology to solve problems and make
        a positive impact on the world. In my studies, I have learned a wide range of programming
        languages and technologies, and I am constantly seeking out new challenges and opportunities
        to expand my skills and knowledge.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Steven Kam <Link to="/">stevenkam.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
