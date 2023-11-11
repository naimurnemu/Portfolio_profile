import React from "react";
import { Helmet } from "react-helmet-async";
import { metaData } from "./data";

const SEOProvider = (props) => {
  const { title } = props || {};
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} · Naimur Rahman</title>
        <meta
          name="description"
          content="Passionate front-end developer skilled in JavaScript, ReactJS, and GraphQL. Let's create amazing digital experiences together!"
        />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.linkedInUrl} />
        <meta property="og:image" content={metaData.linkedInImage} />

        {/* GitHub Meta Tags */}
        <meta property="og:title" content={metaData.nametitle} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.githubUrl} />
        <meta property="og:image" content={metaData.githubImage} />
      </Helmet>
    </div>
  );
};

export default SEOProvider;


