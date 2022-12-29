import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

import blogPath from '../data/blog/blogPath';
import BlogLink from '../components/Blog/BlogLink';

const Blog = () => (
  <Main
    title="Blog"
    description="Some of Steven's writing and thoughts"
  >
    <article className="post" id="blog" style={{ paddingBottom: '0px' }}>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Thoughts and Ideas</Link></h2>
        </div>
      </header>
      <ol>
        {
        blogPath.map((post) => (
          <BlogLink
            data={post}
            key={post.title}
          />
        ))
        }
      </ol>
    </article>
  </Main>
);

export default Blog;
