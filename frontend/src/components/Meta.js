import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * A Component which handles the meta tags of the web Application using react helmet
 * @param {propType} title the title that is passed in to be used as a meta tag for react-helmet
 * @param {propType} description the description that is passed in to be used as a meta tag for react-helmet
 * @param {propType} keywords the keywords passed in to be used as meta tags for react-helmet
 * @returns {Helmet} returns a component consisting of React-Helmet to handle the meta for the site
 */

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

/**
 * default props to be used if none are passed in
 */
Meta.defaultProps = {
  title: 'Welcome To WebShop',
  description: 'We sell the finest mediterranean products',
  keywords: 'mediterranean, buy mediterranean foods',
};

export default Meta;
