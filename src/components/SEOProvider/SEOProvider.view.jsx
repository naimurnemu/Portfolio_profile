import React from 'react';
import { Helmet } from 'react-helmet-async';
import { meta } from './data';

const SEOProvider = () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
    </div>
  );
};

export default SEOProvider;