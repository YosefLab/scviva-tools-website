import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <main className="container margin-vert--xl">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </main>
    </Layout>
  );
}

export default Home;
