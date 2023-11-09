import React from 'react';
import { Helmet } from 'react-helmet-async';
import { meta } from './data';

const SEOProvider = ({title}) => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title} · Naimur Rahman</title>
          <meta name="description" content={meta.description} />
        </Helmet>
    </div>
  );
};

export default SEOProvider;