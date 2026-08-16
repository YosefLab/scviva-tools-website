import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import styles from "./styles.module.scss";

function IconLink(props) {
  const { icon, link } = props;

  return link ? (
    <a className={`${styles.iconLink}`} href={link} target="_blank">
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </a>
  ) : null;
}

export default IconLink;
