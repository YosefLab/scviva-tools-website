import React from "react";
import clsx from "clsx";
import { FiPackage, FiZap } from "react-icons/fi";
import { BiAnalyse, BiTimeFive } from "react-icons/bi";

import styles from "./styles.module.scss";

const size = 24;
const data = [
  {
    icon: <BiAnalyse size={size} />,
    title: <>Eight spatial models, one package</>,
    description: (
      <>
        scVIVA-Tools packages scVIVA, ResolVI, DestVI, DiagVI, Harreman, gimVI,
        Stereoscope, and Tangram — deconvolution, denoising, niche-aware
        differential expression, gene imputation, and cell-cell communication —
        behind a single, consistent API.
      </>
    ),
  },
  {
    icon: <FiPackage size={size} />,
    title: <>Unified AnnData-first API</>,
    description: (
      <>
        Every model follows the same setup/train/extract pattern, so switching
        from deconvolution with DestVI to niche-aware modeling with scVIVA means
        changing the class name, not relearning an API.
      </>
    ),
  },
  {
    icon: <FiZap size={size} />,
    title: <>One install, shared infrastructure</>,
    description: (
      <>
        A single <code>pip install scviva-tools</code> replaces juggling
        separate packages, docs, and release cadences for each spatial method,
        with optional <a href="https://spatialdata.scverse.org/">SpatialData</a>
        /<a href="https://squidpy.readthedocs.io/">squidpy</a> interop via the{" "}
        <code>spatial</code> extra.
      </>
    ),
  },
  {
    icon: <BiTimeFive size={size} />,
    title: <>GPU-accelerated where it counts</>,
    description: (
      <>
        Neighbor-graph-heavy steps (e.g. ResolVI, scVIVA) can use GPU
        acceleration via the optional <code>rapids</code> extra
        (cuML/cuPy/cuGraph), so analyses scale with dataset size.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--6", styles.feature)}>
      <div className="item">
        <div className={styles.header}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length && (
        <section id="features" className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--11 col--offset-1">
                <div className="row">
                  {data.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
