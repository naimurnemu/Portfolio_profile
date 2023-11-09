import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOProvider } from '../../components';

const Portfolio = () => {
  return (
    <HelmetProvider>
      <SEOProvider title="Portfolio" />
      <div>
      Portfolio
    </div>
    </HelmetProvider>
  );
};

export default Portfolio;