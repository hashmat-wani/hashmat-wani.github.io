import React from "react";
import { Helmet } from "react-helmet";
import socialBanner from "./static/social-banner.jpg";

const SEO = () => {
  const title = "Hashmat Noorani - Full Stack Web Developer";
  const url = "https://hashmat-noorani.github.io/";
  const description =
    "Hashmat Noorani - Passionate Full Stack web developer who loves javascript and modern web technologies.";
  const ogimage = `${url}${socialBanner}`;
  const twitter = "@HashmatWani_x";

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="theme-color" content="#6D83F2" />
      <meta name="url" content={url} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="hashmat noorani, portfolio, hashmat, full stack dev, personal portfolio, portfolio design, portfolio website, developer, SDE, frontend, React"
      />
      <meta name="author" content="Hashmat Noorani" />
      {ogimage && <meta name="image" content={ogimage} />}
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogimage && (
        <meta property="og:image" itemprop="image" content={ogimage} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogimage && <meta name="twitter:image" content={ogimage} />}
    </Helmet>
  );
};

export default SEO;
