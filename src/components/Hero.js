import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>
              A Personal Wiki by 
              <br />
              <span className="highlight">Ruben Saragih</span>
            </h1>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="/docs/Getting-started/introduction"
            >
              Getting started
            </Link>
            <p className="padding-top--md">
            Shares what I <strong>learn</strong> and <strong>my interests</strong> in <span className="highlight"><b>cloud computing</b></span>
            </p>
          </div>
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl("/img/logo_jed.png")}
              alt="SaragihRuben logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
