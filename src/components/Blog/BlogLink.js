import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const BlogLink = ({ data }) => (
  <div className="blog-title">
    <article className="small-blog">
      <header>
        <h3><Link to={data.path}>{data.title}</Link></h3>
        <time className="published">{dayjs(data.date).format('DD.MM.YYYY')}</time>
      </header>
    </article>
  </div>
);

BlogLink.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogLink;
