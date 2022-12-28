import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Blog = () => (
  <Main
    title="Blog"
    description="Some of Steven's writing and thoughts"
  >
    <article className="post markdown" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Blog">Thoughts and Ideas</Link></h2>
        </div>
      </header>
      <header>
        <h2>Page is work in progress</h2>
      </header>
    </article>
  </Main>
);

export default Blog;
