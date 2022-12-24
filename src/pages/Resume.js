import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';
import Pdf from '../data/resume/Resume.pdf';

const sections = [
  'Education',
  'Experience',
  // 'Skills',
  'Courses',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Steven Kam's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
          <div className="App">
            <a href={Pdf} target="_blank" rel="noreferrer">
              Click here for the resume as exportable PDF.
            </a>
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      {/* <Skills skills={skills} categories={categories} /> */}
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
