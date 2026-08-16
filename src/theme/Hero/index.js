import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import CodeBlock from "@theme/CodeBlock";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.scss";

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <header className={classnames("hero", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={classnames("col col--6 col--offset-1")}>
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <p className={clsx("hero__subtitle", styles.subtitle)}>
              scVIVA-Tools unifies scVIVA, ResolVI, DestVI, DiagVI, Harreman, gimVI, Stereoscope, and
              Tangram behind one AnnData-first API, built on scvi-tools.
            </p>
            <CodeBlock className="language-sh">pip install scviva-tools</CodeBlock>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--primary button--outline button--lg", styles.getStarted)}
                to={useBaseUrl("get_started/")}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className={classnames("col col--4")}>
            <img src={useBaseUrl(`img/logo.png`)} alt="scVIVA-Tools Logo" className={styles.heroImg} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
