import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

let url = "";

if (typeof window !== "undefined") {
  var params = new URLSearchParams(window.location.search);
  url = params.get("url");
  if (!url) {
    url = "";
  }
}

const SecondPage = () => (
  <Layout>
    <SEO title="Your app is Deploying" />
    <h1>Your site is deployed!</h1>
    <h2>
      Visit here: <a href={url}>{url}</a>
    </h2>
  </Layout>
);

export default SecondPage;
