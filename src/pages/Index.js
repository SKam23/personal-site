import React from 'react';
import { Link } from 'react-router-dom';
import Particle from '../components/Particle';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Steven Kam's personal website."}
  >
    <div className="particle">
      <Particle />
    </div>
    <div className="content">
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/">Welcome to my personal Website</Link></h2>
            <p>
              A beautiful, responsive, statically-generated,
              react application written with modern Javascript.
            </p>
          </div>
        </header>
        <p> Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          <Link to="/blog">blog</Link>, {' '}
          view <Link to="/stats">site statistics</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
      </article>
    </div>
  </Main>
);

export default Index;
